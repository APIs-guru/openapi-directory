#!/usr/bin/env node
// @ts-nocheck
'use strict';

var fs = require('fs');
var fsp = require('fs').promises;
var Path = require('path');
var assert = require('assert');

var _ = require('lodash');
var URI = require('urijs');
var sh = require('shelljs');
var MimeLookup = require('mime-lookup');
var MIME = new MimeLookup(require('mime-db'));

var makeRequest = require('makeRequest');
var util = require('./util');

//Disable check of SSL certificates
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

sh.set('-e');
sh.set('-v');

sh.mkdir('-p','deploy');
sh.touch('deploy/.nojekyll');
sh.cp('resources/index.html', 'deploy/');
sh.mkdir('-p','deploy/v2');

function deployDir(path) {
  assert(_.isString(path) && path[0] !== '/');
  return Path.join('deploy/v2', path);
}

function rootUrl(url) {
  assert(_.isString(url) && url[0] !== '/');
  return URI('https://api.apis.guru/v2/' + url).href();
}

var apisGuruSwagger = util.readYaml('resources/apis_guru_swagger.yaml');
var baseUrl = URI(rootUrl(''));
apisGuruSwagger.schemes = [baseUrl.scheme()];
apisGuruSwagger.host = baseUrl.host();
apisGuruSwagger.basePath = baseUrl.path();
util.saveJson(deployDir('swagger.json'), apisGuruSwagger);
util.saveYaml(deployDir('swagger.yaml'), apisGuruSwagger);

var specs = util.getSpecs('APIs/');
buildApiList(specs)
.then(function (apiList) {
  console.log('Generated list for ' + _.size(apiList) + ' API specs.');
  util.saveJson(deployDir('list.json'), apiList);

  var metrics = {
    numSpecs: _.size(specs),
    numAPIs: _.size(apiList),
    numEndpoints: _(specs).map('paths').map(_.size).sum()
  };
  util.saveJson(deployDir('metrics.json'), metrics);
});

function cacheLogo(url) {
  assert(url.indexOf('#') === -1);
  var logoFile = 'cache/logo/' + util.urlToFilename(url, true);
  if (fs.existsSync(deployDir(logoFile)+'.jpeg')) {
    return fsp.readFile(deployDir(logoFile)+'.jpeg');
  }
  return makeRequest('get', url, {encoding: null, retries: 10})
    .spread(function(response, data) {

      if (!URI(url).suffix()) {
        var mime = response.headers['content-type'];
        assert(mime.match('image/'));
        var extension = MIME.extension(mime);
        assert(extension);
        logoFile += `.${extension}`;
      }

      util.saveFile(deployDir(logoFile), data);
      return rootUrl(logoFile);
    });
}

async function buildApiList(specs) {
  var apiList = {};
  var cachedLogo = {};

  for (var filename in specs) {
    var swagger = specs[filename];

    var logoUrl = _.get(swagger, 'info["x-logo"].url');
    if (logoUrl) {
      if (!cachedLogo[logoUrl])
        cachedLogo[logoUrl] = await cacheLogo(logoUrl);
      if (cachedLogo[logoUrl])
        swagger.info['x-logo'].url = cachedLogo[logoUrl];
    }

    _.defaults(swagger.info, {'x-preferred': true});

    addSwagger(apiList, swagger, filename);
  }
  return apiList;
}

function addSwagger(apiList, swagger, filename) {
  var id = util.getApiId(swagger);
  var apiEntry = apiList[id] = apiList[id] || {versions: {}};
  var versionEntry = buildVersionEntry(swagger, filename);

  apiEntry.versions[versionEntry.info.version] = versionEntry;

  if (versionEntry.info['x-preferred'])
    apiEntry.preferred = versionEntry.info.version;

  //FIXME: here we don't track deleted version, not a problem for right now :)
  apiEntry.added = _([apiEntry.added, versionEntry.added]).compact().min();

  return apiEntry;
}

function buildVersionEntry(swagger, filename) {
  let target = 'swagger';
  if (swagger.openapi) target = 'openapi';
  var basename = 'specs/' + util.getSwaggerPath(swagger, target);
  util.saveJson(deployDir(`${basename}.json`), swagger, true);
  util.saveYaml(deployDir(`${basename}.yaml`), swagger, true);

  var dates = util.exec(`git log --format=%aD --follow -- '${filename}'`);
  dates = _(dates).split('\n').compact();

  return {
    swaggerUrl: rootUrl(`${basename}.json`),
    swaggerYamlUrl: rootUrl(`${basename}.yaml`),
    info: swagger.info,
    externalDocs: swagger.externalDocs,
    added: new Date(dates.last()),
    updated: new Date(dates.first())
  };
}
