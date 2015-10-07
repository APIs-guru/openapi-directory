#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');
var exec = require('child_process').execSync;
var Path = require('path');
var jp = require('json-pointer');
var jsonPath = require('jsonpath');
var glob = require('glob')
var editor = require('editor');
var async = require('async')
var sortobject = require('deep-sort-object');
var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mkdirp = require('mkdirp').sync;
var mktemp = require('mktemp').createFileSync;
var jsonPatch = require('json-merge-patch');
var RestClient = require('node-rest-client').Client;

var jsondiffpatch = require('jsondiffpatch').create({
  arrays: {
    includeValueOnMove: true
  },
  objectHash: function(obj) {
    // this function is used only to when objects are not equal by ref
    // add swagger specific properties
    return obj._id || obj.id || obj.name || obj.operationId;
  }
});

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
  .arguments('[DIR]')
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
  .command('api')
  .description('generate API')
  .arguments('<SPEC_ROOT_URL>')
  .action(generateAPI);

program
  .command('add')
  .description('add new spec')
  .option('-f, --fixup', 'try to fix spec')
  .option('-s, --service <NAME>', 'supply service name')
  .arguments('<TYPE> <URL>')
  .action(addToCollection);

program.parse(process.argv);

function urlsCollection() {
  _.each(getSpecs(), function (swagger) {
    console.log(getOriginUrl(swagger));
  });
}

function updateCollection(dir) {
  var specs = getSpecs(dir);
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    var exPatch = {info: {}};
    var serviceName = getServiceName(swagger);
    if (serviceName)
      exPatch.info['x-serviceName'] = serviceName;

    var url = getOriginUrl(swagger);
    console.error(url);

    writeSpec(url, getSpecType(swagger), exPatch, function (error, result) {
      if (error)
        return logError(error, result);

      var newFilename = getSwaggerPath(result.swagger);
      assert(newFilename === filename);
      asyncCb(null);
    });
  });
}

function generateAPI(specRootUrl) {
  var list = {};

  _.each(getSpecs(), function (swagger, filename) {
    var id = getProviderName(swagger);
    assert(id.indexOf(':') === -1);

    var service = getServiceName(swagger);
    if (!_.isUndefined(service)) {
      assert(service.indexOf(':') === -1);
      id += ':' + service;
    }

    var version = swagger.info.version;
    if (_.isUndefined(list[id]))
      list[id] = { versions: {} };

    list[id].versions[version] = {
      swaggerUrl: specRootUrl + getSwaggerPath(swagger),
      info: swagger.info,
      added: gitLogDate('--follow --diff-filter=A -1', filename),
      updated: gitLogDate('-1', filename)
    };
  });

  _.each(list, function (api, id) {
    //FIXME: here we don't track deleted version, not a problem for right now :)
    api.added = _(api.versions).values().pluck('added').min();
    if (_.size(api.versions) === 1)
      api.preferred = _.keys(api.versions)[0];
    else {
      _.each(api.versions, function (spec, version) {
        var preferred = spec.info['x-preferred'];
        assert(_.isBoolean(preferred));
        if (preferred) {
          assert(!api.preferred);
          api.preferred = version;
        }
      });
    }
  });

  console.log('Generated list for ' + _.size(list) + ' API specs.');

  saveJson('api/v1/list.json', list);
}

function gitLogDate(options, filename) {
  var result = exec('git log --format=%aD ' + options + ' -- \'' + filename + '\'');
  result = result.toString();
  return new Date(result);
}

/* TODO: automatic detection of version formats
function compareVersions(ver1, ver2) {
  assert(ver1 !== ver2);

  var versionRegex = /^v(\d+(?:\.\d+)*)(?:beta(\d+))?$/
  var ver1parts = ver1.match(versionRegex);
  var ver2parts = ver2.match(versionRegex);
}
*/

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

function addToCollection(type, url, command) {
  var exPatch = {info: {}};
  if (command.service)
    exPatch.info['x-serviceName'] = command.service;

  writeSpec(url, type, exPatch, function (error, result) {
    if (!error && !command.fixup)
      return;

    if (!command.fixup || !result.swagger)
      return logError(error, result);

    editFile(errorToString(error, result), function (error, data) {
      if (error) {
        console.error(error);
        process.exitCode = errExitCode;
        return;
      }

      var match = data.match(/\?+ Swagger.*$((?:.|\n)*?^}$)/m);
      if (!match || !match[1]) {
        console.error('Can not match edited Swagger');
        process.exitCode = errExitCode;
        return;
      }
      var editedSwagger = JSON.parse(match[1]);
      saveFixup(result.swagger, editedSwagger);
    });
  });
}

function editFile(data, cb) {
  var tmpfile = mktemp('/tmp/XXXXXX.fixup.txt');
  fs.writeFileSync(tmpfile, data);

  editor(tmpfile, function (code) {
    if (code !== 0)
      return cb(Error('Editor closed with code ' + code));

    cb(null, fs.readFileSync(tmpfile, 'utf-8'));
  });
}

function saveFixup(swagger, editedSwagger) {
  //Before diff we need to unpatch, it's a way to appeand changes
  revertFixup(swagger);

  var diff = jsondiffpatch.diff(swagger, editedSwagger);
  if (diff)
    saveJson(swaggerPath + '/fixup.json', diff);
}

function revertFixup(swagger) {
  var fixup = readJson(getSwaggerPath(swagger, 'fixup.json'));
  if (fixup)
    jsondiffpatch.unpatch(swagger, fixup);
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
             'youtubereporting:v1',
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

      console.error(url);
      writeSpec(url, 'google', {}, function (error, result) {
        if (error)
          return logError(error, result);
        mergePatch(result.swagger, addPath);
      });
    });
  });
}

function mergePatch(swagger, addPatch) {
  var path = getSwaggerPath(swagger, 'patch.json');
  var patch = jsonPatch.merge(readJson(path), addPatch);
  saveJson(path, patch);
}

function writeSpec(source, type, exPatch, callback) {
  converter.getSpec(source, type, function (err, spec) {
    assert(!err, err);

    convertToSwagger(spec, function (error, swagger) {
      var result = {
        spec: spec,
        errors: error
      };

      if (error)
        return callback(error, result);

      patchSwagger(swagger, exPatch);
      result.swagger = swagger;

      function done(errors, warnings) {
        result.warnings = warnings;

        if (errors)
          return callback(errors, result);

        if (warnings)
          logJson(warnings);

        var filename = saveSwagger(swagger);
        callback(null, result);
      }

      function validateAndFix() {
        validateSwagger(swagger, function (errors, warnings) {
          if (!errors)
            return done(errors, warnings);

          if (fixSpec(swagger, errors))
            validateAndFix();
          else
            validateSwagger(swagger, done);
        });
      }

      validateAndFix();
    });
  });
}

function fixSpec(swagger, errors) {
  var fixed = false;

  _.each(errors, function (error) {
    var parentPath = jp.compile(_.dropRight(error.path));
    var path = jp.compile(error.path);

    var parentValue = jp(swagger, parentPath);
    var value = jp(swagger, path);

    var newValue;

    switch(error.code) {
      case 'ONE_OF_MISSING':
        if (value.in === 'path' && !value.required) {
          newValue = _.clone(value)
          newValue.required = true;
        }
        break;
      case 'UNRESOLVABLE_REFERENCE':
        if (typeof swagger.definitions[value] !== 'undefined')
          newValue = '#/definitions/' + value;
        break;
      case 'DUPLICATE_OPERATIONID':
        //FIXME: find better solutions than strip all 'operationId'
        jsonPath.apply(swagger, '$.paths[*][*].operationId', function (value) {
          return undefined;
        });
        fixed = true;
        break;
      case 'OBJECT_MISSING_REQUIRED_PROPERTY':
        if (value.type === 'array' && _.isUndefined(value.items)) {
          newValue = _.clone(value);
          newValue.items = {};
        }
        break;
      case 'ENUM_MISMATCH':
      case 'INVALID_FORMAT':
      case 'INVALID_TYPE':
        if (_.last(error.path) !== 'default')
          break;
        var type = parentValue.type;
        if (_.isString(value) && !_.isUndefined(type) && type !== 'string') {
          try {
            newValue = JSON.parse(value);
          }
          catch (e) {}
        }
        delete parentValue.default;
        //TODO: add warning
        break;
    }
    if (!_.isUndefined(newValue)) {
      jp(swagger, path, newValue);
      fixed = true;
    }
  });
  return fixed;
}

function logError(error, context) {
  console.error(errorToString(error, context));
  process.exitCode = errExitCode;
}

function errorToString(errors, context) {
  var spec = context.spec;
  var swagger = context.swagger;
  var warnings = context.warnings;
  var url = spec.source;

  var result = '++++++++++++++++++++++++++ Begin ' + url + ' +++++++++++++++++++++++++\n';
  if (spec.type !== 'swagger_2' || _.isUndefined(swagger)) {
    result += Json2String(spec.spec);
    if (spec.subResources)
      result += Json2String(spec.subResources);
  }

  if (!_.isUndefined(swagger)) {
    result += '???????????????????? Swagger ' + url + ' ????????????????????????????\n';
    result += Json2String(swagger);
  }

  if (errors) {
    result += '!!!!!!!!!!!!!!!!!!!! Errors ' + url + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n';
    if (_.isArray(errors))
      result += Json2String(errors);
    else
      result += errors + '\n';
  }

  if (warnings) {
    result += '******************** Warnings ' + url + ' ******************************\n';
    result += Json2String(warnings);
  }
  result += '------------------------- End ' + url + ' ----------------------------\n';
  return result;
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

function getSpecs(dir) {
  dir = dir || '';
  var files = glob.sync(dir + '**/swagger.json');
  return _.transform(files, function (result, filename) {
    result[filename] = readJson(filename);
  }, {});
}

function patchSwagger(swagger, exPatch) {
  jsonPatch.apply(swagger, exPatch);
  jsonPatch.apply(swagger, getMergePatch(swagger));

  var fixup = readJson(getSwaggerPath(swagger, 'fixup.json'));
  swagger = jsondiffpatch.patch(swagger, fixup);
}

function getMergePatch(swagger) {
  var patch = null;
  var pathComponents = getPathComponents(swagger);

  var path = '';
  _.each(pathComponents, function (dir) {
    path += dir + '/';
    var subPatch = readJson(path + 'patch.json');

    if (!_.isUndefined(subPatch))
      patch = jsonPatch.merge(patch, subPatch);
  });

  return patch;
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

function getSwaggerPath(swagger, filename) {
  filename = filename || 'swagger.json';
  return getPathComponents(swagger).join('/') + '/' + filename;
}

function saveJson(path, json) {
  mkdirp(Path.dirname(path));
  var str = Json2String(json);
  console.log(path);
  fs.writeFileSync(path, str);
}

function saveSwagger(swagger) {
  var path = getSwaggerPath(swagger);
  saveJson(path, swagger);
  return path;
}
