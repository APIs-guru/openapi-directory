#!/usr/bin/env node
'use strict';

var assert = require('assert');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
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
var Request = require('request');
var MimeLookup = require('mime-lookup');
var MIME = new MimeLookup(require('mime-db'));
var URI = require('urijs');
var csvStringify = require('csv-stringify');
var YAML = require('js-yaml');
var jade = require('jade');

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
  .command('cache')
  .description('cache external resources')
  .arguments('<SPEC_ROOT_URL>')
  .action(cacheResources);

program
  .command('api')
  .description('generate API')
  .arguments('<SPEC_ROOT_URL>')
  .action(generateAPI);

program
  .command('csv')
  .description('generate CSV list')
  .action(generateCSV);

program
  .command('apisjson')
  .description('generate APIs.json file')
  .arguments('<SPEC_ROOT_URL>')
  .action(generateAPIsJSON);

program
  .command('html')
  .description('generate html file with links to specs')
  .arguments('<SPEC_ROOT_URL>')
  .action(generateHTML);

program
  .command('banner')
  .description('generate "APIs in collection" banner')
  .action(generateBanner);

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

function refreshCollection(dir) {
  _.each(getSpecs(dir), function (swagger, filename) {
    assert(getSwaggerPath(swagger) === filename);
    saveSwagger(swagger);
  });
}

function updateCollection(dir) {
  var specs = getSpecs(dir);
  async.forEachOfSeries(specs, function (swagger, filename, asyncCb) {
    var exPatch = {info: {}};
    var serviceName = getServiceName(swagger);
    var type = getSpecType(swagger);
    if (type !== 'google' && serviceName)
      exPatch.info['x-serviceName'] = serviceName;

    var url = getOriginUrl(swagger);
    console.error(url);

    writeSpec(url, type, exPatch, function (error, result) {
      if (error)
        return logError(error, result);

      var newFilename = getSwaggerPath(result.swagger);
      if (newFilename !== filename)
        asyncCb(Error("Spec was moved to new location"));
      asyncCb(null);
    });
  }, function (error) {
    if (error)
      throw error;
  });
}

function cacheResources(specRootUrl) {
  _.each(getSpecs(), function (swagger, filename) {
    if (_.isUndefined(swagger.info['x-logo']))
      return;

    var url = swagger.info['x-logo'].url;
    getResource(url, {encoding: null}, function(err, response, data) {
      assert(!err, err);

      var mime = response.headers['content-type'];
      assert(mime.match('image/'));
      var extension = MIME.extension(mime);
      assert(extension);
      var dirname = path.dirname(filename);
      var logoFile = 'cache/' + dirname + '/logo.' + extension;
      saveFile(logoFile, data);

      var fragment = URI(url).fragment();
      if (fragment)
        fragment = '#' + fragment;

      swagger.info['x-logo'].url = specRootUrl + logoFile + fragment;
      saveYaml(filename, swagger);
    });
  });
}

function getResource(url, options, callback) {
  if (_.isFunction(options)) {
    callback = options;
    options = {};
  }

  options.method = 'GET';
  options.gzip = true;
  options.url = url;
  async.retry({}, function (asyncCallback) {
    new Request(options, function(err, response, data) {
      if (err)
        return asyncCallback(new Error('Can not GET "' + url +'": ' + err));
      if (response.statusCode !== 200)
        return asyncCallback(new Error('Can not GET "' + url +'": ' + response.statusMessage));
      asyncCallback(null, {response: response, data: data});
    });
  }, function (err, result) {
    if (err)
      return callback(err);

    console.log(url);
    callback(null, result.response, result.data);
  });
}

function generateList() {
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

    list[id].versions[version] = swagger;
  });

  _.each(list, function (api, id) {
    if (_.size(api.versions) === 1)
      api.preferred = _.keys(api.versions)[0];
    else {
      _.each(api.versions, function (spec, version) {
        var preferred = spec.info['x-preferred'];
        assert(_.isBoolean(preferred));
        if (preferred) {
          assert(!api.preferred, 'Multiply prefered versions in "' + id + '"');
          api.preferred = version;
        }
      });
    }
  });

  return list;
}

function generateAPI(specRootUrl) {
  var list = {};

  _.each(generateList(), function (api, id) {
    var dir = id.replace(/:/, '/');
    list[id] = {
      preferred: api.preferred,
      versions: {}
    };
    _.each(api.versions, function (swagger, version) {
      var filename = getSwaggerPath(swagger);
      var swaggerJsonPath = getSwaggerPath(swagger, 'swagger.json');
      saveJson(swaggerJsonPath, swagger);

      var versionObj = list[id].versions[version] = {
        swaggerUrl: specRootUrl + swaggerJsonPath,
        swaggerYamlUrl: specRootUrl + getSwaggerPath(swagger),
        info: swagger.info,
        added: gitLogDate('--follow --diff-filter=A -1', filename),
        updated: gitLogDate('-1', filename)
      };

      if (swagger.externalDocs)
        versionObj.externalDocs = swagger.externalDocs;
    });
    //FIXME: here we don't track deleted version, not a problem for right now :)
    list[id].added = _(list[id].versions).values().pluck('added').min();
  });

  console.log('Generated list for ' + _.size(list) + ' API specs.');

  saveJson('api/v1/list.json', list);
}

function generateCSV(list) {
  var header = [
    'id',
    'info_title',
    'info_description',
    'info_termsOfService',
    'info_contact_name',
    'info_contact_url',
    'info_contact_email',
    'info_license_name',
    'info_license_url',
    'info_x-website',
    'info_x-logo_url',
    'info_x-logo_background',
    'info_x-apiClientRegistration_url',
    'info_x-pricing_type',
    'info_x-pricing_url',
    'externalDocs_description',
    'externalDocs_url',
  ];

  var table = [header];
  _.forEach(generateList(), function (api, id) {
    var apiData = api.versions[api.preferred];
    var row = [id];
    _.forEach(header, function (column) {
      if (column === 'id') return;

      var path = column.replace(/_/g, '.');
      row.push(_.get(apiData, path));
    });
    table.push(row);
  });

  csvStringify(table, function (err, output) {
    assert(!err, 'Failed stringify: ' + err);
    saveFile('internal_api/list.csv', output);
  });
}

function generateAPIsJSON(specRootUrl) {
  var collection = {
    name: 'APIs.guru',
    description: 'Wikipedia for Web APIs',
    image: 'https://apis-guru.github.io/api-models/branding/logo_horizontal.svg',
    added: '2015-10-15',
    modified: new Date().toISOString().substring(0, 10),
    url: specRootUrl + 'apis.json',
    specificationVersion: '0.15',
    apis: [],
    maintainers: [{
      FN: 'APIs.guru',
      email: 'founders@APIs.guru',
      photo: 'https://apis-guru.github.io/api-models/branding/logo_horizontal.svg'
    }]
  };

  _.each(getSpecs(), function (swagger) {
    var info = swagger.info;
    collection.apis.push({
      name: info.title,
      description: info.description,
      image: info['x-logo'] && info['x-logo'].url,
      humanUrl: swagger.externalDocs && swagger.externalDocs.url,
      baseUrl: swagger.schemes[0] + '://' + swagger.host + swagger.basePath,
      version: info.version,
      properties: [{
        type: 'Swagger',
        url: specRootUrl + getSwaggerPath(swagger, 'swagger.json')
      }]
    });
  });

  saveJson('apis.json', collection);
}

function generateHTML(specRootUrl) {
  var specs = _.keys(getSpecs())
  var locals = {
    specs: specs,
    specRootUrl: specRootUrl
  };

  var template = path.join(path.dirname(__filename), '../scripts/index.jade');
  var html = jade.renderFile(template, locals);
  saveFile('index.html', html);
}

function generateBanner() {
  var size = _.size(generateList());
  var url = 'https://img.shields.io/badge/APIs_in_collection-' + size + '-orange.svg';
  getResource(url, {encoding: null}, function(err, response, data) {
    assert(!err, err);
    saveFile('apis_in_collection_banner.svg', data);
  });
}

function gitLogDate(options, filename) {
  var result = exec('git -C .. log --format=%aD ' + options + ' -- \'APIs/' + filename + '\'');
  result = result.toString();
  assert(result && result !== '');
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

    if (!command.fixup || !result.swagger)
      return logError(error, result);

    editFile(errorToString(error, result), function (error, data) {
      if (error) {
        console.error(error);
        process.exitCode = errExitCode;
        return;
      }

      var match = data.match(/\?+ Swagger.*$((?:.|\n)*?)^[!*-]/m);
      if (!match || !match[1]) {
        console.error('Can not match edited Swagger');
        process.exitCode = errExitCode;
        return;
      }
      var editedSwagger = YAML.safeLoad(match[1]);
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
  var fixupPath = getSwaggerPath(swagger, 'fixup.yaml');

  //Before diff we need to unpatch, it's a way to appeand changes
  var fixup = readYaml(fixupPath);
  if (fixup)
    jsondiffpatch.unpatch(swagger, fixup);

  var diff = jsondiffpatch.diff(swagger, editedSwagger);
  if (diff)
    saveYaml(fixupPath, diff);
}

function updateGoogle() {
  var knownSpecs = _(getSpecs()).filter({
    info: {
      'x-providerName': 'googleapis.com'
    }
  }).mapKeys(getOriginUrl).value();

  getResource('https://www.googleapis.com/discovery/v1/apis', function(err, response, data) {
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
             //circular reference in MapFolder/MapItem
             'mapsengine:exp2',
             'mapsengine:v1',
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
      console.log('!!! Delete ' + getSwaggerPath(swagger, ''));
    }).value();
  });
}

function mergePatch(swagger, addPatch) {
  var path = getSwaggerPath(swagger, 'patch.yaml');
  var patch = readYaml(path);
  var newPatch = jsonPatch.merge(patch, addPatch);

  if (!_.isEqual(patch, newPatch))
    saveYaml(path, newPatch);
}

function writeSpec(source, type, exPatch, callback) {
  var getSpecTask = converter.getSpec.bind(this, source, type);
  async.retry({}, getSpecTask, function (err, spec) {
    assert(!err, err);

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

      result.swagger = swagger;

      function done(errors, warnings) {
        result.warnings = warnings;

        if (errors)
          return callback(errors, result);

        if (warnings)
          logYaml(warnings);

        saveSwagger(swagger);
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
      console.log('match ' + paramName);
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

function errorToString(errors, context) {
  var spec = context.spec;
  var swagger = context.swagger;
  var warnings = context.warnings;
  var url = spec.source;

  var result = '++++++++++++++++++++++++++ Begin ' + url + ' +++++++++++++++++++++++++\n';
  if (spec.type !== 'swagger_2' || _.isUndefined(swagger)) {
    result += Yaml2String(spec.spec);
    if (spec.subResources)
      result += Yaml2String(spec.subResources);
  }

  if (!_.isUndefined(swagger)) {
    result += '???????????????????? Swagger ' + url + ' ????????????????????????????\n';
    result += Yaml2String(swagger);
  }

  if (errors) {
    result += '!!!!!!!!!!!!!!!!!!!! Errors ' + url + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n';
    if (_.isArray(errors))
      result += Yaml2String(errors);
    else
      result += errors.stack + '\n';
  }

  if (warnings) {
    result += '******************** Warnings ' + url + ' ******************************\n';
    result += Yaml2String(warnings);
  }
  result += '------------------------- End ' + url + ' ----------------------------\n';
  return result;
}

function Yaml2String(data) {
  //FIXME: remove
  data = JSON.parse(JSON.stringify(data));

  data = sortJson(data);
  return YAML.safeDump(data, {indent: 2, lineWidth: -1});
}

function logYaml(json) {
  console.error(Yaml2String(json));
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

function getSpecs(dir) {
  dir = dir || '';
  var files = glob.sync(dir + '**/swagger.yaml');
  return _.transform(files, function (result, filename) {
    result[filename] = readYaml(filename);
  }, {});
}

function patchSwagger(swagger, exPatch) {
  //use 1.0.0 as default version
  if (_.isUndefined(swagger.info.version))
    swagger.info.version = '1.0.0';

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
  var pathComponents = getPathComponents(swagger);

  var path = '';
  _.each(pathComponents, function (dir) {
    path += dir + '/';
    var subPatch = readYaml(path + 'patch.yaml');

    if (!_.isUndefined(subPatch))
      patch = jsonPatch.merge(patch, subPatch);
  });

  //swagger-converter if title is absent use host as default
  if (swagger.info.title === swagger.host && !_.isUndefined(patch.info.title))
    delete swagger.info.title;

  applyMergePatch(swagger, patch);

  var fixup = readYaml(getSwaggerPath(swagger, 'fixup.yaml'));
  swagger = jsondiffpatch.patch(swagger, fixup);
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

function readYaml(filename) {
  if (!fs.existsSync(filename))
    return;

  var data = fs.readFileSync(filename, 'utf-8');
  return YAML.safeLoad(data, {filename: filename});
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

  return _.map(path, function (str) {
    //replace slash with Unicode slash
    return str.replace('/', '∕');
  });
}

function getSwaggerPath(swagger, filename) {
  filename = filename || 'swagger.yaml';
  return getPathComponents(swagger).join('/') + '/' + filename;
}

function sortJson(json) {
  var json = sortobject(json, function (a, b) {
    if (a === b)
      return 0;
    return (a < b) ? -1 : 1;
  });

  //detect Swagger format.
  if (_.get(json, 'swagger') !== '2.0')
    return json;

  var fieldOrder = [
    'swagger',
    'schemes',
    'host',
    'basePath',
    'x-hasEquivalentPaths',
    'info',
    'externalDocs',
    'consumes',
    'produces',
    'securityDefinitions',
    'security',
    'parameters',
    'responses',
    'tags',
    'paths',
    'definitions'
  ];

  var sorted = {};
  _.each(fieldOrder, function (name) {
    if (_.isUndefined(json[name]))
      return;

    sorted[name] = json[name];
    delete json[name];
  });
  _.assign(sorted, json);

  return sorted;
}

function saveJson(path, json) {
  json = sortJson(json);
  saveFile(path, JSON.stringify(json, null, 2) + '\n');
}

function saveYaml(path, json) {
  saveFile(path, Yaml2String(json));
}

function saveFile(path, data) {
  console.log(path);
  mkdirp(Path.dirname(path));
  fs.writeFileSync(path, data);
}

function saveSwagger(swagger) {
  var path = getSwaggerPath(swagger);
  saveYaml(path, swagger);
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
