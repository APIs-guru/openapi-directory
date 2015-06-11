#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');
var glob = require('glob')
var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mkdirp = require('mkdirp').sync;
var RestClient = require('node-rest-client').Client;

var program = require('commander');

program
  .command('update')
  .description('run update')
  .action(updateCollection);

program
  .command('google')
  .description('add new Google APIs')
  .action(updateGoogle);

program
  .command('add')
  .description('add new spec')
  .arguments('<TYPE> <URL>')
  .action(addToCollection);

program.parse(process.argv);

function updateCollection() {
  var specs = getSpecs();
  _.each(specs, function (swagger, filename) {
    writeSpec(getOriginUrl(swagger), getSpecType(swagger), function (newFilename) {
      assert(newFilename === filename);
    });
  });
}

function addToCollection(type, url) {
  writeSpec(url, type, function () {});
}

function updateGoogle() {
  var knownUrls = _(getSpecs()).values().map(getOriginUrl).value();
  var discovery = new RestClient();
  discovery.get('https://www.googleapis.com/discovery/v1/apis', function (data) {
    data = JSON.parse(data);
    assert.equal(data.kind, 'discovery#directoryList');
    assert.equal(data.discoveryVersion, 'v1');

    var result = [];
    //FIXME: data.preferred
    _.each(data.items, function (api) {
      //blacklist
      if ([
             //missing API description
             'cloudlatencytest:v2',
             //asterisk in path
             'admin:directory_v1',
             //plus in path
             'pubsub:v1beta1',
             'pubsub:v1beta1a',
             'pubsub:v1beta2',
             //circular reference in MapFolder/MapItem
             'mapsengine:exp2',
             'mapsengine:v1',
           ].indexOf(api.id) >= 0) {
          return;
      }
      var url = api.discoveryRestUrl;
      if (knownUrls.indexOf(url) !== -1)
        return;

      writeSpec(url, 'google', _.noop);
    });
  });
}

function writeSpec(url, type, callback) {
  convertToSwagger(url, type, function (swagger) {
    var filename = saveSwagger(swagger);
    callback(filename);
  });
}

function getSpecs(callback, finishCallback) {
  var files = glob.sync('**/swagger.json');
  return _.transform(files, function (result, filename) {
    result[filename] = readSwagger(filename);
  }, {});
}

function convertToSwagger(url, format, callback) {
  converter.getSpec(url, format, function (err, spec) {
    assert(!err, err);
    spec.convertTo('swagger_2', function (err, swagger) {
      assert(!err, err);
      _.merge(swagger.spec.info, {
        'x-providerName': parseHost(swagger.spec),
        'x-origin': {
          format: spec.formatName,
          version: spec.getFormatVersion(),
          url: url
        }
      });
      callback(swagger.spec)
    });
  });
}

function parseHost(swagger) {
  assert(swagger.host);
  var p = parseDomain(swagger.host);
  p.domain = p.domain.replace(/^www.?/, '')
  p.subdomain = p.subdomain.replace(/^www.?/, '')
  //TODO: use subdomain to detect 'x-serviceName'

  var host = p.tld;
  if (p.domain !== '')
    host = p.domain + '.' + host;

  //Workaround for google API
  if (p.tld === 'googleapis.com')
    host = p.tld;

  assert(host && host !== '');
  return host;
}

function readSwagger(filename) {
  var data = fs.readFileSync(filename, 'utf-8');
  return JSON.parse(data);
}


function getOrigin(swagger) {
  return swagger.info['x-origin'];
}

function getSpecType(swagger) {
  var origin = getOrigin(swagger);
  return converter.getTypeName(origin.format, origin.version);
}

function getOriginUrl(swagger) {
  return getOrigin(swagger).url;
}

function getPath(swagger) {
  var path = swagger.info['x-providerName'] + '/';
  if ('x-serviceName' in swagger.info)
    path +=  swagger.info['x-serviceName'] + '/';
  return path + swagger.info.version;
}

function saveSwagger(swagger) {
  var str = JSON.stringify(swagger, null, 2);
  var path = getPath(swagger);
  mkdirp(path);
  path += '/swagger.json';
  fs.writeFileSync(path, str);
  return path;
}
