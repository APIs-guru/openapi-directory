#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');

var glob = require('glob')

function getSpecs(callback, finishCallback) {
  new glob.Glob('**/swagger.json').on('match', function (filename) {
    readSwagger(filename, function (swagger) {
      callback(filename, swagger);
    })
  }).on('error', function (err) {
    assert(false, err);
  }).on('end', finishCallback);
}

getSpecs(function (filename, spec) {
  convertToSwagger(getOrigin(spec), function (swagger) {
    var newFilename = saveSwagger(swagger);
    assert(newFilename === filename);
  })
}, function () {
  console.log('finish');
});

var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mkdirp = require('mkdirp').sync;

function convertToSwagger(origin, callback) {
  var format = converter.getTypeName(origin.format, origin.version);
  converter.getSpec(origin.url, format, function (err, spec) {
    assert(!err, err);
    spec.convertTo('swagger_2', function (err, swagger) {
      assert(!err, err);
      swagger.spec.info['x-origin'] = {
        format: spec.formatName,
        version: spec.getFormatVersion(),
        url: origin.url
      };
      callback(swagger.spec)
    });
  });
}

function parseHost(swagger, subdomains) {
  assert(swagger.host);
  var p = parseDomain(swagger.host);
  p.domain = p.domain.replace(/^www.?/, '')
  p.subdomain = p.subdomain.replace(/^www.?/, '')

  var host = p.tld;
  if (p.domain !== '')
    host += '.' + p.domain;

  //Workaround for google API
  if (p.tld === 'googleapis.com')
    host = p.tld;

  assert(host && host !== '');
  assert(p.subdomain === '');
  return host;
}

function readSwagger(filename, callback) {
  fs.readFile(filename, 'utf-8', function (err, data) {
    assert(!err, err);
    var swagger = JSON.parse(data);
    callback(swagger);
  });
}


function getOrigin(swagger) {
  return swagger.info['x-origin'];
}

function getPath(swagger) {
  return parseHost(swagger) + '/' + swagger.info['x-serviceName'] + '/' + swagger.info.version;
}

function saveSwagger(swagger) {
  var str = JSON.stringify(swagger, null, 2);
  var path = getPath(swagger);
  mkdirp(path);
  path += '/swagger.json';
  fs.writeFileSync(path, str);
  return path;
}
