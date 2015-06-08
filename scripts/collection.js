#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');
var glob = require('glob')
var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mkdirp = require('mkdirp').sync;

var program = require('commander');

program
  .command('update')
  .description('run update')
  .action(updateCollection);

program
  .command('add')
  .description('add new spec')
  .arguments('<TYPE> <URL>')
  .action(addToCollection);

program.parse(process.argv);

function updateCollection() {
  getSpecs(function (filename, swagger) {
    writeSpec(getUrl(swagger), getSpecType(swagger), function (newFilename) {
      assert(newFilename === filename);
    });
  }, function () {
    console.log('finish');
  });
}

function addToCollection(type, url) {
  writeSpec(url, type, function () {});
}

function writeSpec(url, type, callback) {
  convertToSwagger(url, type, function (swagger) {
    var filename = saveSwagger(swagger);
    callback(filename);
  });
}

function getSpecs(callback, finishCallback) {
  new glob.Glob('**/swagger.json').on('match', function (filename) {
    readSwagger(filename, function (swagger) {
      callback(filename, swagger);
    })
  }).on('error', function (err) {
    assert(false, err);
  }).on('end', finishCallback);
}

function convertToSwagger(url, format, callback) {
  converter.getSpec(url, format, function (err, spec) {
    assert(!err, err);
    spec.convertTo('swagger_2', function (err, swagger) {
      assert(!err, err);
      swagger.spec.info['x-origin'] = {
        format: spec.formatName,
        version: spec.getFormatVersion(),
        url: url
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
    host = p.domain + '.' + host;

  //Workaround for google API
  if (p.tld === 'googleapis.com')
    host = p.tld;

  assert(host && host !== '');
  console.log(host);
  console.log(p.subdomain);
  //assert(p.subdomain === '');
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

function getSpecType(swagger) {
  var origin = getOrigin(swagger);
  return converter.getTypeName(origin.format, origin.version);
}

function getUrl(swagger) {
  return getOrigin(swagger).url;
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
