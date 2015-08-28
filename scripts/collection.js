#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');
var Path = require('path');
var glob = require('glob')
var async = require('async')
var sortobject = require('deep-sort-object');
var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mkdirp = require('mkdirp').sync;
var jsonPatch = require('json-merge-patch');
var RestClient = require('node-rest-client').Client;
var SwaggerTools = require('swagger-tools').specs.v2;

var program = require('commander');

var errExitCode = 255;
program
  .option('-0', 'allways return 0 as exit code', function () {
    errExitCode = 0;
  });

program
  .command('urls')
  .description('show source url for specs')
  .action(urlsCollection);

program
  .command('update')
  .description('run update')
  .action(updateCollection);

program
  .command('validate')
  .description('validate collection')
  .action(validateCollection);

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

function urlsCollection() {
  _.each(getSpecs(), function (swagger) {
    console.log(getOriginUrl(swagger));
  });
}

function updateCollection() {
  var specs = getSpecs();
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    writeSpec(getOriginUrl(swagger), getSpecType(swagger), function (swagger) {
      var newFilename = getSwaggerPath(swagger);
      assert(newFilename === filename);
      asyncCb(null);
    });
  });
}

function validateCollection() {
  var specs = getSpecs();
  var foundErrors = false;
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    console.error('======================== ' + filename + ' ================');
    validateSwagger(swagger, function (errors, warnings) {
      foundErrors = !_.isEmpty(errors) || foundErrors;
      if (errors)
        logJson(errors);
      if (warnings)
        logJson(warnings);
    });
    asyncCb(null);
  }, function () {
    if (foundErrors)
      process.exitCode = errExitCode;
  });
}

function addToCollection(type, url) {
  writeSpec(url, type, _.noop);
}

function updateGoogle() {
  var knownSpecs = _.mapKeys(getSpecs(), getOriginUrl);
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
             'pubsub:v1',
             'pubsub:v1beta1',
             'pubsub:v1beta1a',
             'pubsub:v1beta2',
             'genomics:v1',
             'appengine:v1beta4',
             'storagetransfer:v1',
             'cloudbilling:v1',
             'proximitybeacon:v1beta1',
             //circular reference in MapFolder/MapItem
             'mapsengine:exp2',
             'mapsengine:v1',
           ].indexOf(api.id) >= 0) {
          return;
      }

      assert(typeof api.preferred === 'boolean');
      var addPath = {
        info: {
          'x-preferred': api.preferred
        }
      };

      var url = api.discoveryRestUrl;
      var knownSpec = knownSpecs[url];
      if (!_.isUndefined(knownSpec)) {
        mergePatch(knownSpec, addPath);
        return;
      }

      writeSpec(url, 'google', function (swagger) {
        mergePatch(swagger, addPath);
      });
    });
  });
}

function mergePatch(swagger, addPatch) {
  var path = getPathComponents(swagger).join('/') + '/patch.json';
  var patch = jsonPatch.merge(readJson(path), addPatch);
  saveJson(path, patch);
}

function writeSpec(url, type, callback) {
  console.log(url);

  getOriginSpec(url, type, function (spec) {
    convertToSwagger(spec, function (error, swagger) {
      if (error)
        return logSpec(error, null, spec);

      var path = getPathComponents(swagger);
      patchSwagger(swagger, path);

      validateSwagger(swagger, function (errors, warnings) {
        if (errors)
          return logSpec(errors, warnings, spec, swagger);

        if (warnings)
          logJson(warnings);

        var filename = saveSwagger(swagger);
        callback(swagger);
      });
    });
  });
}

function logSpec(error, warnings, spec, swagger) {
  var url = spec.source;

  console.error('++++++++++++++++++++++++++ Begin ' + url + ' +++++++++++++++++++++++++');
  if (spec.type !== 'swagger_2' || _.isUndefined(swagger)) {
    logJson(spec.spec);
    if (spec.subResources)
      logJson(spec.subResources);
  }
  if (!_.isUndefined(swagger)) {
    console.error('???????????????????? Swagger ' + url + ' ????????????????????????????');
    logJson(swagger);
  }
  console.error('!!!!!!!!!!!!!!!!!!!! Errors ' + url + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  if (_.isArray(error))
    logJson(error);
  else
    console.error(error);
  if (warnings) {
    console.error('******************** Warnings ' + url + ' ******************************');
    logJson(warnings);
  }
  console.error('------------------------- End ' + url + ' ----------------------------');
  process.exitCode = errExitCode;
}

function Json2String(json) {
  json = sortobject(json);
  return JSON.stringify(json, null, 2) + '\n';
}

function logJson(json) {
  console.error(Json2String(json));
}

function validateSwagger(swagger, callback) {
  //TODO: remove 'getSpec', instead do it when reading file.
  converter.getSpec(swagger, 'swagger_2', function (err, spec) {
    assert(!err, err);
    spec.validate(callback);
  });
}

function getSpecs() {
  var files = glob.sync('**/swagger.json');
  return _.transform(files, function (result, filename) {
    result[filename] = readJson(filename);
  }, {});
}

function getOriginSpec(url, format, callback) {
  converter.getSpec(url, format, function (err, spec) {
    assert(!err, err);
    callback(spec);
  });
}

function patchSwagger(swagger, pathComponents) {
  var patch = null;

  var path = '';
  _.each(pathComponents, function (dir) {
    path += dir + '/';
    var subPatch = readJson(path + 'patch.json');

    if (!_.isUndefined(subPatch))
      patch = jsonPatch.merge(patch, subPatch);
  });

  jsonPatch.apply(swagger, patch);
}

function convertToSwagger(spec, callback) {
  spec.convertTo('swagger_2', function (err, swagger) {
    if (err)
      return callback(err);

    _.merge(swagger.spec.info, {
      'x-providerName': parseHost(swagger.spec),
      'x-origin': {
        format: spec.formatName,
        version: spec.getFormatVersion(),
        url: spec.source
      }
    });
    callback(null, swagger.spec)
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

function readJson(filename) {
  if (!fs.existsSync(filename))
    return;

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

function getProviderName(swagger) {
  return swagger.info['x-providerName'];
}

function getServiceName(swagger) {
  return swagger.info['x-serviceName'];
}

function getPathComponents(swagger) {
  var serviceName = getServiceName(swagger);
  var path = [getProviderName(swagger)];
  if (serviceName)
    path.push(serviceName);
  path.push(swagger.info.version);

  return path;
}

function getSwaggerPath(swagger) {
  return getPathComponents(swagger).join('/') + '/swagger.json';
}

function saveJson(path, json) {
  mkdirp(Path.dirname(path));
  var str = Json2String(json);
  fs.writeFileSync(path, str);
}

function saveSwagger(swagger) {
  var path = getSwaggerPath(swagger);
  console.log(path);
  saveJson(path, swagger);
  return path;
}
