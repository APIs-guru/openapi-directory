#!/usr/bin/env node
'use strict';

var assert = require('assert');
var fs = require('fs');
var _ = require('lodash');

var jp = require('json-pointer');
var jsonPath = require('jsonpath');
var editor = require('editor');
var async = require('async')
var converter = require('api-spec-converter');
var parseDomain = require('parse-domain');
var mktemp = require('mktemp').createFileSync;
var jsonPatch = require('json-merge-patch');
var YAML = require('js-yaml');

var util = require('./util');

var jsondiffpatch = require('jsondiffpatch').create({
  arrays: {
    includeValueOnMove: true
  },
  objectHash: function(obj, index) {
    // this function is used only to when objects are not equal by ref
    // add swagger specific properties
    return obj._id || obj.id || obj.name || obj.operationId || '$$index:' + index;
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
  .command('refresh')
  .description('run refresh')
  .arguments('[DIR]')
  .action(refreshCollection);

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
  .command('add')
  .description('add new spec')
  .option('-f, --fixup', 'try to fix spec')
  .option('-s, --service <NAME>', 'supply service name')
  .arguments('<TYPE> <URL>')
  .action(addToCollection);

program.parse(process.argv);

function urlsCollection() {
  _.each(util.getSpecs(), function (swagger) {
    console.log(util.getOriginUrl(swagger));
  });
}

function refreshCollection(dir) {
  _.each(util.getSpecs(dir), function (swagger, filename) {
    assert(util.getSwaggerPath(swagger) === filename);
    util.saveSwagger(swagger);
  });
}

function updateCollection(dir) {
  var specs = util.getSpecs(dir);
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    var exPatch = {info: {}};
    var serviceName = util.getServiceName(swagger);
    var type = getSpecType(swagger);
    if (type !== 'google' && serviceName)
      exPatch.info['x-serviceName'] = serviceName;

    var url = util.getOriginUrl(swagger);
    console.error(url);

    writeSpec(url, type, exPatch, function (error, result) {
      if (error) {
        logError(error, result);
        return asyncCb(error);
      }

      var newFilename = util.getSwaggerPath(result.swagger);
      if (newFilename !== filename)
        asyncCb(Error("Spec was moved to new location: " + newFilename));
      asyncCb(null);
    });
  }, function (error) {
    if (error)
      throw error;
  });
}

function validateCollection() {
  var specs = util.getSpecs();
  var foundErrors = false;
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    console.error('======================== ' + filename + ' ================');
    validateSwagger(swagger, function (errors, warnings) {
      foundErrors = !_.isEmpty(errors) || foundErrors;
      if (errors)
        logYaml(errors);
      if (warnings)
        logYaml(warnings);
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

    if (!command.fixup || !result.spec)
      return logError(error, result);

    editFile(errorToString(error, result), function (error, data) {
      if (error) {
        console.error(error);
        process.exitCode = errExitCode;
        return;
      }

      var match = data.match(/^\++ Begin.*$((?:.|\n)*?)^\?+ Swagger.*$((?:.|\n)*?)^[!*-]/m);
      if (!match || !match[1] || !match[2]) {
        console.error('Can not match edited Swagger');
        process.exitCode = errExitCode;
        return;
      }

      if (type !== 'swagger_2') {
        var editedOrigin = YAML.safeLoad(match[1]);
        saveFixup(getOriginFixupPath(result.spec), serilazeSpec(result.spec), editedOrigin);
      }

      if (!_.isUndefined(result.swagger)) {
        var editedSwagger = YAML.safeLoad(match[2]);
        saveFixup(util.getSwaggerPath(result.swagger, 'fixup.yaml'), result.swagger, editedSwagger);
      }
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

function getOriginFixupPath(spec) {
  return '../fixes/' + encodeURIComponent(spec.source) + '.yaml';
}

function saveFixup(fixupPath, swagger, editedSwagger) {
  //Before diff we need to unpatch, it's a way to appeand changes
  var fixup = util.readYaml(fixupPath);
  if (fixup)
    jsondiffpatch.unpatch(swagger, fixup);

  var diff = jsondiffpatch.diff(swagger, editedSwagger);
  if (diff)
    util.saveYaml(fixupPath, diff);
}

function updateGoogle() {
  var knownSpecs = _(util.getSpecs()).filter({
    info: {
      'x-providerName': 'googleapis.com'
    }
  }).mapKeys(util.getOriginUrl).value();

  util.getResource('https://www.googleapis.com/discovery/v1/apis', function(err, response, data) {
    assert(!err, err);

    data = JSON.parse(data);
    assert.equal(data.kind, 'discovery#directoryList');
    assert.equal(data.discoveryVersion, 'v1');

    var result = [];
    var googleSpecs = _(data.items).filter(function (api) {
      //blacklist
      return ([
             //duplicate preferred
             'genomics:v1beta2',
             //no paths
             'iam:v1alpha1'
           ].indexOf(api.id) === -1);
    }).indexBy('discoveryRestUrl').mapValues('preferred').value();

    _.each(googleSpecs, function (preferred, url) {
      assert(typeof preferred === 'boolean');
      var addPath = {
        info: {
          'x-preferred': preferred
        }
      };

      var knownSpec = knownSpecs[url];
      if (!_.isUndefined(knownSpec)) {
        mergePatch(knownSpec, addPath);
        return;
      }

      console.error(url);
      writeSpec(url, 'google', null, function (error, result) {
        if (error)
          return logError(error, result);
        mergePatch(result.swagger, addPath);
        //FIXME: too update with patch
        writeSpec(url, 'google', null, _.noop);
      });
    });

    _(knownSpecs).keys().difference(_.keys(googleSpecs)).each(function (url) {
      var swagger = knownSpecs[url];
      console.log('!!! Delete ' + util.getSwaggerPath(swagger, ''));
    }).value();
  });
}

function mergePatch(swagger, addPatch) {
  var path = util.getSwaggerPath(swagger, 'patch.yaml');
  var patch = util.readYaml(path);
  var newPatch = jsonPatch.merge(patch, addPatch);

  if (!_.isEqual(patch, newPatch))
    util.saveYaml(path, newPatch);
}

function writeSpec(source, type, exPatch, callback) {
  var getSpecTask = converter.getSpec.bind(this, source, type);
  async.retry({}, getSpecTask, function (err, spec) {
    assert(!err, err);

    var fixup = util.readYaml(getOriginFixupPath(spec));
    jsondiffpatch.patch(spec, fixup);

    convertToSwagger(spec, function (error, swagger) {
      var result = {
        spec: spec,
        errors: error
      };

      if (error)
        return callback(error, result);

      try {
        patchSwagger(swagger, exPatch);
      }
      catch (e) {
        callback(e, result);
      }

      expandPathTemplates(swagger);
      replaceSpacesInSchemaNames(swagger);

      result.swagger = swagger;

      function done(errors, warnings) {
        result.warnings = warnings;

        if (errors)
          return callback(errors, result);

        if (warnings)
          logYaml(warnings);

        util.saveSwagger(swagger);
        callback(null, result);
      }

      function validateAndFix() {
        validateSwagger(swagger, function (errors, warnings) {
          if (!_.isArray(errors))
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

//TODO: move into separate lib
var SwaggerMethods = require('swagger-methods');
function expandPathTemplates(swagger) {
  var paths = swagger.paths;
  _.each(_.keys(paths), function (path) {
    function applyParameter(pathItem, name, callback) {
      function applyParameterArray(paramArray, callback) {
        var newParamArray = [];
        _.any(paramArray, function (param, index) {
          if (param.name !== name) {
            newParamArray.push(param);
            return;
          }

          assert(param.in === 'path');
          var ret = callback(param);

          if (!_.isUndefined(ret))
            newParamArray.push(ret);
        });

        return newParamArray;

      }

      pathItem.parameters = applyParameterArray(pathItem.parameters, callback)
      _(pathItem).pick(SwaggerMethods).each(function (value) {
        value.parameters = applyParameterArray(value.parameters, callback);
      }).value();
    }

    var pathItem = paths[path];
    var originalPath = path;
    var match;

    while (match = /{\+([^}]*?)}/.exec(path)) {
      var paramName = match[1];
      path = path.replace(match[0], '{' + paramName + '}');
      applyParameter(pathItem, paramName, function(param) {
        param['x-reservedExpansion'] = true;
        return param;
      });
    }

    var parameterNames = [];
    while (match = /{\/([^}]*?)}/.exec(path)) {
      var paramName = match[1];
      path = path.replace(match[0], '/{' + paramName + '}');
      applyParameter(pathItem, paramName, function(param) {
        assert(_.isUndefined(param.required) || param.required === false);
        param.required = true;
        return param;
      });
      parameterNames.unshift(paramName);
    }

    var clonePath = path;
    var clonePathItem = _.cloneDeep(pathItem);
    _.each(parameterNames, function (paramName) {
      clonePath = clonePath.replace('/{' + paramName + '}', '');
      applyParameter(clonePathItem, paramName, function() {
        return; //delete it
      });
      paths[clonePath] = _.cloneDeep(clonePathItem);
    });

    delete paths[originalPath];
    paths[path] = pathItem;
  });
}

function replaceSpacesInSchemaNames(swagger) {
  if (_.isUndefined(swagger.definitions))
      return;

  swagger.definitions = _.mapKeys(swagger.definitions, function (value, key) {
    return replaceSpaces(key);
  });
}

function replaceSpaces(str) {
  return str.replace(/ /g, '_');
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
      case 'EQUIVALENT_PATH':
        swagger['x-hasEquivalentPaths'] = true;
        break;
      case 'MISSING_PATH_PARAMETER_DEFINITION':
        var field = error.message.match(/: (.+)$/)[1];
        newValue = _.clone(value);
        newValue.parameters = value.parameters || [];
        newValue.parameters.push({
          name: field,
          type: 'string',
          in: 'path',
          required: true
        });
        break;
      case 'OBJECT_MISSING_REQUIRED_PROPERTY_DEFINITION':
        if (_.isUndefined(value.properties))
          break;

        newValue = _.clone(value);
        newValue.required = [];
        _.each(value.required, function (name) {
          if (!_.isUndefined(value.properties[name]))
            newValue.required.push(name);
        });
        if (_.isEmpty(newValue.required))
          delete newValue.required;
        break;
      case 'ONE_OF_MISSING':
        if (value.in === 'path' && !value.required) {
          newValue = _.clone(value)
          newValue.required = true;
        }
        break;
      case 'UNRESOLVABLE_REFERENCE':
        if (value.indexOf(' ') !== -1)
          newValue = value = replaceSpaces(value);

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
        if (error.message === 'Missing required property: version') {
          newValue = _.clone(value);
          newValue.version = '1.0.0';
          break;
        }
        if (value.type === 'array' && _.isUndefined(value.items)) {
          newValue = _.clone(value);
          newValue.items = {};
        }
        break;
      case 'ENUM_MISMATCH':
      case 'INVALID_FORMAT':
      case 'INVALID_TYPE':
        if (_.last(error.path) === 'default') {
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

        var match = error.message.match(/^Expected type (\w+) but found type (\w+)$/);
        if (match && match[2] === 'string') {
          try {
            var tmp = JSON.parse(value);
            if (typeof tmp === match[1]) {
              newValue = tmp;
              fixed = true;
              break;
            }
          }
          catch (e) {}
        }
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

function serilazeSpec(spec) {
  var data = {spec: spec.spec};
  if (spec.subResources)
    data.subResources = spec.subResources;
  return data;
}

function errorToString(errors, context) {
  var spec = context.spec;
  var swagger = context.swagger;
  var warnings = context.warnings;
  var url = spec.source;

  var result = '++++++++++++++++++++++++++ Begin ' + url + ' +++++++++++++++++++++++++\n';
  if (spec.type !== 'swagger_2' || _.isUndefined(swagger)) {
    result += util.Yaml2String(serilazeSpec(spec));
  }

  result += '???????????????????? Swagger ' + url + ' ????????????????????????????\n';
  if (!_.isUndefined(swagger))
    result += util.Yaml2String(swagger);

  if (errors) {
    result += '!!!!!!!!!!!!!!!!!!!! Errors ' + url + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n';
    if (_.isArray(errors))
      result += util.Yaml2String(errors);
    else
      result += errors.stack + '\n';
  }

  if (warnings) {
    result += '******************** Warnings ' + url + ' ******************************\n';
    result += util.Yaml2String(warnings);
  }
  result += '------------------------- End ' + url + ' ----------------------------\n';
  return result;
}

function validateSwagger(swagger, callback) {
  //TODO: remove 'getSpec', instead do it when reading file.
  converter.getSpec(swagger, 'swagger_2', function (err, spec) {
    assert(!err, err);
    spec.validate(function (errors, warnings) {
      if (errors && swagger['x-hasEquivalentPaths']) {
        _.remove(errors, function (error) {
          return (error.code === 'EQUIVALENT_PATH');
        });
        if (_.isEmpty(errors))
          errors = null;
      }

      callback(errors, warnings);
    });
  });
}

function patchSwagger(swagger, exPatch) {
  //use 1.0.0 as default version
  if (_.isUndefined(swagger.info.version))
    swagger.info.version = '1.0.0';

  //FIXME: remove workaround for citrix shim API
  if (swagger.info.version === 'N/A')
    swagger.info.version = 'NotApplicable';

  //Cleanup from common postfixes
  _.some([
      'API Documentation',
      'JSON API',
      'REST API',
      'Web API',
      'RESTful API',
      'API'
    ], function (postfix) {
      var regex = new RegExp('(.*)(^| )' + postfix + '$');
      var match = (swagger.info.title || '').match(regex);
      if (!match)
        return false;
      swagger.info.title = match[1];
      return true;
  });

  removeEmpty(swagger.info);

  var patch = exPatch;
  var pathComponents = util.getPathComponents(swagger);

  var path = '';
  _.each(pathComponents, function (dir) {
    path += dir + '/';
    var subPatch = util.readYaml(path + 'patch.yaml');

    if (!_.isUndefined(subPatch))
      patch = jsonPatch.merge(patch, subPatch);
  });

  //swagger-converter if title is absent use host as default
  if (swagger.info.title === swagger.host && !_.isUndefined(patch.info.title))
    delete swagger.info.title;

  applyMergePatch(swagger, patch);

  var fixup = util.readYaml(util.getSwaggerPath(swagger, 'fixup.yaml'));
  jsondiffpatch.patch(swagger, fixup);
}

function removeEmpty(obj) {
  if (!_.isObject(obj))
    return;

  _.forEach(obj, function (value, key) {
    removeEmpty(value);
    if (value === '' || _.isEmpty(value))
      delete obj[key];
  });
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

//code is taken from 'json-merge-patch' package and simplify to allow only adding props
function applyMergePatch(target, patch) {
  assert(_.isPlainObject(target));

  if (patch === null)
    return;

  var keys = Object.keys(patch);
  _.forEach(patch, function (value, key) {
    assert(value !== null, 'Patch tried to delete property: ' + key);

    if (_.isPlainObject(target[key]))
      return applyMergePatch(target[key], value);

    assert(_.isUndefined(target[key]), 'Patch tried to override property: ' + key);
    target[key] = value;
  });
};

function logYaml(json) {
  console.error(util.Yaml2String(json));
}

function getSpecType(swagger) {
  var origin = util.getOrigin(swagger);
  return converter.getTypeName(origin.format, origin.version);
}

