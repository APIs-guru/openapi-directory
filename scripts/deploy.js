#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var Path = require('path');
var Promise = require('bluebird');

var URI = require('urijs');
var MimeLookup = require('mime-lookup');
var MIME = new MimeLookup(require('mime-db'));
var exec = require('child_process').execSync;
var jade = require('jade');

var util = require('./util');

var getResourceAsync = Promise.promisify(util.getResource, {multiArgs: true});
var specRootUrl = 'https://apis-guru.github.io/api-models/';

process.on("unhandledRejection", function(reason, promise) {
  process.exitCode = 255;
  //TODO: better solution
  setTimeout(function () { throw reason; });
});

cacheResources()
  .then(function (specs) {
    //Note: at this point all logo are cached
    generateHTML(specs);
    generateAPIsJSON(specs);

    _.each(specs, function (swagger) {
      util.saveSwagger(swagger);

      var swaggerJsonPath = util.getSwaggerPath(swagger, 'swagger.json');
      util.saveJson(swaggerJsonPath, swagger);
    });

    var apiList = generateAPI(specs);
    console.log('Generated list for ' + _.size(apiList) + ' API specs.');
    util.saveJson('api/v1/list.json', apiList);

    return generateBanner(specs, apiList);
  });

function cacheResources(specs) {
  var specs = util.getSpecs('../APIs/');

  return Promise.mapSeries(_.values(specs), function (swagger) {
    if (_.isUndefined(swagger.info['x-logo']))
      return swagger;

    var url = swagger.info['x-logo'].url;
    return getResourceAsync(url, {encoding: null})
      .spread(function(response, data) {

        var mime = response.headers['content-type'];
        assert(mime.match('image/'));
        var extension = MIME.extension(mime);
        assert(extension);
        var logoFile = 'cache/' + util.getSwaggerPath(swagger, 'logo.' + extension);
        util.saveFile(logoFile, data);

        var fragment = URI(url).fragment();
        if (fragment)
          fragment = '#' + fragment;

        //Modify object to 
        swagger.info['x-logo'].url = specRootUrl + logoFile + fragment;

        return swagger;
      });
  });
}

function generateHTML(specs) {
  var locals = {
    specs: _.map(specs, _.ary(util.getSwaggerPath, 1)),
    specRootUrl: specRootUrl
  };

  var template = Path.join(Path.dirname(__filename), '../scripts/index.jade');
  var html = jade.renderFile(template, locals);
  util.saveFile('index.html', html);
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

  util.saveJson('apis.json', collection);
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

function generateBanner(specs, apiList) {
  var numAPIs = _.size(apiList);
  var numEndpoints = 0;
  _.each(specs, function (swagger) {
    numEndpoints += _.size(swagger.paths);
  });

  return [
    saveShield('APIs in collection' , numAPIs.toString(), 'orange'),
    saveShield('Endpoints', numEndpoints.toString(), 'red')
  ];
}

function gitLogDate(options, filename) {
  var result = exec('git -C .. log --format=%aD ' + options + ' -- \'APIs/' + filename + '\'');
  result = _.trim(result.toString(), '\n');
  assert(result && result !== '');
  result = result.split('\n');
  return result.map(function (str) {
    return new Date(str);
  });
}

function saveShield(subject, status, color) {
  function escape(str) {
    return str.replace(/_/g, '__').replace(/-/g, '--').replace(/ /g, '_');
  }
  function join(left, right) {
    return left + '-' + right;
  }

  var text = join(escape(subject), escape(status));
  var url =  'https://img.shields.io/badge/' + join(text, color) + '.svg';

  return getResourceAsync(url, {encoding: null})
    .spread(function(response, data) {
      var filename = escape(subject).toLowerCase() + '_banner.svg';
      util.saveFile(filename, data);
    });
}
