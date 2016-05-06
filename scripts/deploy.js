#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var Promise = require('bluebird');
var fs = require('fs');

var URI = require('urijs');
var sh = require('shelljs');
var MimeLookup = require('mime-lookup');
var MIME = new MimeLookup(require('mime-db'));

var makeRequest = require('makeRequest');
var util = require('./util');

var specRootUrl = 'https://apis-guru.github.io/api-models/';
var deployDir = 'deploy/';

sh.set('-e');
sh.set('-v');

sh.mkdir(deployDir);
sh.cp('scripts/index.html', deployDir);
sh.cp('-R', 'branding/', deployDir);

sh.mkdir('-p', deployDir + 'api/v1');
sh.cp('scripts/apis_guru_swagger.yaml', deployDir + 'api/v1/swagger.yaml');
sh.cp('scripts/apis.json', deployDir + 'api/apis.json');

cacheResources(util.getSpecs('APIs/'))
  .then(function (specs) {
    //Note: at this point all logo are cached
    generateAPIsJSON(specs);

    _.each(specs, function (swagger) {
      var swaggerPath = deployDir + util.getSwaggerPath(swagger, 'swagger');
      util.saveJson(swaggerPath + '.json', swagger);
      util.saveYaml(swaggerPath + '.yaml', swagger);
    });

    var apiList = generateAPI(specs);
    console.log('Generated list for ' + _.size(apiList) + ' API specs.');
    util.saveJson(deployDir + 'api/v1/list.json', apiList);

    var numAPIs = _.size(apiList);
    var numEndpoints = _(specs).map('paths').map(_.size).sum();
    var numSpecs = _.size(specs);

    return [
      saveShield('APIs in collection' , numAPIs, 'orange'),
      saveShield('Endpoints', numEndpoints, 'red'),
      saveShield('OpenAPI specs', numSpecs, 'yellow'),
      saveShield('Tested on', numSpecs + ' specs', 'green', true)
    ];
  })
  .done();

function cacheResources(specs) {
  return Promise.mapSeries(_.values(specs), function (swagger) {
    if (_.isUndefined(swagger.info['x-logo']))
      return swagger;

    var url = swagger.info['x-logo'].url;
    assert(url.indexOf('#') === -1);
    return makeRequest('get', url, {encoding: null})
      .spread(function(response, data) {

        var extension = URI(url).suffix();
        if (!extension) {
          var mime = response.headers['content-type'];
          assert(mime.match('image/'));
          extension = MIME.extension(mime);
          assert(extension);
        }

        var logoFile = 'cache/' + util.getSwaggerPath(swagger, 'logo.' + extension);
        util.saveFile(deployDir + logoFile, data);

        //Modify object to 
        swagger.info['x-logo'].url = specRootUrl + logoFile;

        return swagger;
      });
  });
}

function generateAPIsJSON(specs) {
  var apisJsonPath = __dirname + '/apis.json'
  var collection = _.extend(util.readJson(apisJsonPath), {
    created: '2015-10-15',
    modified: new Date().toISOString().substring(0, 10),
    url: specRootUrl + 'apis.json',
    apis: []
  });

  _.each(specs, function (swagger) {
    var info = swagger.info;
    collection.apis.push({
      name: info.title,
      description: info.description,
      image: info['x-logo'] && info['x-logo'].url,
      humanURL: swagger.externalDocs && swagger.externalDocs.url,
      baseURL: swagger.schemes[0] + '://' + swagger.host + swagger.basePath,
      version: info.version,
      properties: [{
        type: 'Swagger',
        url: specRootUrl + util.getSwaggerPath(swagger, 'swagger.json')
      }]
    });
  });

  util.saveJson(deployDir + 'apis.json', collection);
}

function generateAPI(specs) {
  var list = {};

  _.each(specs, function (swagger) {
    var id = util.getApiId(swagger);
    var version = swagger.info.version;

    list[id] = list[id] || { versions: {} };
    var api = list[id];

    var filename = util.getSwaggerPath(swagger);
    var updated = gitLogDate('-1', filename)[0];
    //FIXME: here we don't track deleted version, not a problem for right now :)
    var added = gitLogDate('--follow --diff-filter=A', filename).pop();
    api.added = _.min([api.added, added]);

    var preferred = swagger.info['x-preferred'];
    if (_.isUndefined(preferred) || preferred === true)
      api.preferred = version;

    api.versions[version] = {
      swaggerUrl: specRootUrl + util.getSwaggerPath(swagger, 'swagger.json'),
      swaggerYamlUrl: specRootUrl + util.getSwaggerPath(swagger),
      info: swagger.info,
      externalDocs: swagger.externalDocs,
      added: added,
      updated: updated
    };
  });

  return list;
}

function gitLogDate(options, filename) {
  var result = util.exec(`git log --format=%aD ${options} -- 'APIs/${filename}'`);
  result = _.trim(result.stdout, '\n').split('\n');
  assert(!_.isEmpty(result));
  return result.map(function (str) {
    return new Date(str);
  });
}

function saveShield(subject, status, color, addLogo) {
  function escape(obj) {
    var str = _.isString(obj) ? obj : obj.toString();
    return str.replace(/_/g, '__').replace(/-/g, '--').replace(/ /g, '_');
  }
  function join(left, right) {
    return left + '-' + right;
  }

  var filename = join(join(escape(subject), escape(status)), color);
  var url = new URI(`https://img.shields.io/badge/${filename}.svg`);
  if (addLogo) {
    var data = fs.readFileSync('./branding/icon-16x16.png', 'base64');
    url.addQuery('logo', URI.encodeQuery(`data:image/png;base64,${data}`));
  }

  return makeRequest('get', url.href(), {encoding: null})
    .spread(function(response, data) {
      var filename = deployDir + 'banners/' + escape(subject).toLowerCase() + '_banner.svg';
      util.saveFile(filename, data);
    });
}
