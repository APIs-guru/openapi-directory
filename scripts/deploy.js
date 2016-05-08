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

var specRootUrl = 'https://apis-guru.github.io/api-models';
var deployDir = 'deploy';

sh.set('-e');
sh.set('-v');

sh.mkdir(deployDir);
sh.cp('scripts/index.html', deployDir);
sh.cp('-R', 'branding/', deployDir);

sh.mkdir('-p', `${deployDir}/api/v1`);
sh.cp('scripts/apis_guru_swagger.yaml', `${deployDir}/api/v1/swagger.yaml`);

var specs = util.getSpecs('APIs/');
cacheResources(specs)
  .then(function (specs) {
    //Note: at this point all logo are cached
    var apiList = buildApiList(specs);
    console.log('Generated list for ' + _.size(apiList) + ' API specs.');
    util.saveJson(`${deployDir}/api/v1/list.json`, apiList);

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

        var logoFile = 'cache/' + util.getSwaggerPath(swagger, `logo.${extension}`);
        util.saveFile(`${deployDir}/${logoFile}`, data);

        //Modify object to 
        swagger.info['x-logo'].url = `${specRootUrl}/${logoFile}`;

        return swagger;
      });
  });
}

function buildApiList(specs) {
  return _(specs)
    .map(buildApiListEntry)
    .groupBy(util.getApiId)
    .mapValues(versions => ({
      versions: _.keyBy(versions, 'info.version'),
      //FIXME: here we don't track deleted version, not a problem for right now :)
      added: _(versions).map('added').min(),
      preferred: _.find(versions, 'info["x-preferred"]').info.version
    })).value();
}

function buildApiListEntry(swagger) {
  //TODO: remove
  var filename = 'APIs/' + util.getSwaggerPath(swagger);

  _.defaults(swagger.info, {'x-preferred': true});

  var basename = util.getSwaggerPath(swagger, 'swagger');
  util.saveJson(`${deployDir}/${basename}.json`, swagger);
  util.saveYaml(`${deployDir}/${basename}.yaml`, swagger);

  var dates = util.exec(`git log --format=%aD --follow -- '${filename}'`).stdout;
  dates = _(dates).split('\n').compact()
  return {
    swaggerUrl: `${specRootUrl}/${basename}.json`,
    swaggerYamlUrl: `${specRootUrl}/${basename}.yaml`,
    info: swagger.info,
    externalDocs: swagger.externalDocs,
    added: new Date(dates.last()),
    updated: new Date(dates.first())
  };
}

function saveShield(subject, status, color, addLogo) {
  function escape(obj) {
    return obj.toString().replace(/_/g, '__').replace(/-/g, '--').replace(/ /g, '_');
  }

  subject = escape(subject);
  status = escape(status);

  var url = new URI(`https://img.shields.io/badge/${subject}-${status}-${color}.svg`);
  if (addLogo) {
    var data = URI.encodeQuery(fs.readFileSync('./branding/icon-16x16.png', 'base64'));
    url.addQuery('logo', `data:image/png;base64,${data}`);
  }

  return makeRequest('get', url.href(), {encoding: null})
    .spread(function(response, data) {
      util.saveFile(`${deployDir}/banners/${subject.toLowerCase()}_banner.svg`, data);
    });
}
