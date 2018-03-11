#!/usr/bin/env node
'use strict';

const assert = require('assert');
const fs = require('fs');
const url = require('url');
const pathLib = require('path');
const utilLib = require('util');

const _ = require('lodash');
const jp = require('json-pointer');
const jsonPath = require('jsonpath');
const converter = require('api-spec-converter');
const converterVersion = require('api-spec-converter/package.json').version;
const parseDomain = require('parse-domain');
const jsonPatch = require('json-merge-patch');
const jiff = require('jiff');
const YAML = require('js-yaml');
const Promise = require('bluebird');

const makeRequest = require('makeRequest');
const util = require('./util');
const specSources = require('./spec_sources');
const sp = require('./sortParameters.js');
var httpCache;
try {
  httpCache = YAML.safeLoad(fs.readFileSync(pathLib.join(__dirname,'../metadata/httpCache.yaml'),'utf8'));
}
catch (ex) {
  console.log(ex.message);
  httpCache = { cache: [] };
}
var resolverContext = {
  anyDiff: false,
  called: false
}
var fromLeads = false;
var newBlackList = [];

var warnings = [];

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

function getCacheIndex(url) {
  return _.findIndex(httpCache.cache,function(e){
    return e.url === url;
  });
}

function getCacheEntry(url) {
  var cacheIndex =_.findIndex(httpCache.cache,function(e){
    return e.url === url;
  });
  if (cacheIndex>=0)
    return httpCache.cache[cacheIndex];
  else {
    var cacheEntry = { url: url };
    httpCache.cache.push(cacheEntry);
    return cacheEntry;
  }
}

converter.ResourceReaders.url = function (url) {
  resolverContext.called = true;
  var options = {
    headers: {
      'Accept': 'application/json,*/*',
      'Accept-Language': 'en-GB,en;q=0.5'
    },
  retries : 10
  };
  var cacheEntry = getCacheEntry(url);
  if (cacheEntry && cacheEntry.etag && resolverContext.etag && resolverContext.format !== 'swagger_1') {
    options.headers['If-None-Match'] = cacheEntry.etag;
  }
  return makeRequest('get', url, options)
    .then(function(result){
      if (result[0].statusCode === 304) {
    throw new Error('Warning: 304 Not Modified');
        result[1] = {}; //util.exec('git show '+cacheEntry.gitHash.trim());
      }
      else {
        //fs.writeFileSync('../metadata/tmp', result[1], 'utf8');
        //cacheEntry.gitHash = util.exec('git hash-object -w ../metadata/tmp').trim();
        resolverContext.anyDiff = true;
      }
      for (var h in result[0].headers) {
        h = h.toLowerCase();
        if ((h === 'last-modified') || (h == 'etag')) {
          cacheEntry[h] = result[0].headers[h];
        }
      }
      return result[1].split('\r').join('');
    });
}

class SpecError extends Error {
  constructor(originError, context) {
    super('');
    this.stack = errorToString(originError, context);
    this.context = context;
  }
}


//Disable check of SSL certificates
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

var program = require('commander');

var errExitCode = 255;
program
  .option('-0', 'always return 0 as exit code', function () {
    errExitCode = 0;
  });

program
  .command('urls')
  .description('show source url for definitions')
  .action(urlsCollection);

program
  .command('refresh')
  .description('run refresh - read and write back fixup.yaml files')
  .arguments('[DIR]')
  .action(refreshCollection);

program
  .command('fixup')
  .description('update "fixup.yaml" for specified Swagger')
  .arguments('<Swagger>')
  .action(fixupSwagger);

program
  .command('update')
  .description('run update')
  .option('-i, --ignore', 'ignore validation errors')
  .option('-f, --force', 'update even if skip flag set')
  .option('-q, --quiet', 'suppress two common warnings')
  .option('-r, --resume <PROVIDER>','resume update at a particular provider')
  .option('-s, --slow', 'do not use httpCache etag info')
  .arguments('[DIR]')
  .action(updateCollection);

program
  .command('validate')
  .description('validate collection')
  .option('-q, --quiet', 'suppress two common warnings')
  .option('-f, --fix', 'test fixing in validate')
  .arguments('[DIR]')
  .action(validateCollection);

program
  .command('check')
  .description('check status of x-preferred flags only')
  .arguments('[DIR]')
  .action(checkPreferred);

program
  .command('leads')
  .description('add/remove definitions from 3rd-party catalogs')
  .arguments('[DIR]')
  .action(updateCatalogLeads);

program
  .command('add')
  .description('add new definition')
  .option('-b, --background <BACKGROUND>', 'specify background colour')
  .option('-c, --categories <CATEGORIES>', 'csv list of categories')
  .option('-d, --desclang <LANG>', 'specify description language')
  .option('-f, --fixup', 'try to fix definition')
  .option('-h, --host <HOST>', 'specify host for relative specs')
  .option('-i, --ignore','ignore validation errors')
  .option('-l, --logo <LOGO>', 'specify logo url')
  .option('-s, --service <NAME>', 'supply service name')
  .option('-t, --twitter <NAME>', 'supply x-twitter account, logo not needed')
  .option('-u, --unofficial','set unofficial flag')
  .arguments('<FORMAT> <URL>')
  .action(addToCollection);

program.parse(process.argv);

function urlsCollection() {
  _.each(util.getSpecs(), function (swagger) {
    console.log(util.getOriginUrl(swagger));
  });
}

function refreshCollection(dir) {
  _.each(util.getSpecs(dir), function (swagger, filename) {
    console.log(filename);
    if (filename.indexOf('amazonaws.com')<0)
      assert(util.getSwaggerPath(swagger) === filename);
    util.saveSwagger(swagger);

    var fixupPath = util.getSwaggerPath(swagger, 'fixup.yaml')
    var revertSwagger = _.cloneDeep(swagger);
    revertFixup(fixupPath, revertSwagger);
    saveFixup(fixupPath, revertSwagger, swagger);
  });
}

function fixupSwagger(swaggerPath) {
  var swagger = util.readYaml(swaggerPath);
  util.editFile(util.Yaml2String(swagger))
    .then(function (editedSwagger) {
      editedSwagger = YAML.safeLoad(editedSwagger);
      appendSwaggerFixup(swagger, editedSwagger);
    })
    .done();
}

function updateCollection(dir, command) {
  specSources.getLeads(util.getSpecs(dir))
    .then(leads => _.toPairs(leads))
    .then(leadPairs => {
      if (command.resume) {
        _.remove(leadPairs, function(lp){
          return (lp[0] < command.resume);
        });
      }
      return leadPairs;
    })
    .each(([filename, lead]) => {
      if (lead) {
        var origin = _.cloneDeep(util.getOrigin(lead));
        if (Array.isArray(origin))
          origin = origin.pop();
        var source = origin.url;
        var cacheEntry = getCacheEntry(source);
        if ((cacheEntry.skip && !command.force) || (origin['x-apisguru-direct'])) {
          console.log('SKIP '+source);
          return null;
        }
        return writeSpecFromLead(lead, command)
          .then(swagger => {
            if (swagger) {
              let target = 'swagger.yaml';
              if (swagger.openapi) target = 'openapi.yaml';
              var newFilename = util.getSwaggerPath(swagger,target);
              if (newFilename !== filename)
                warnings.push(`Spec was moved from "${filename}" to "${newFilename}"`);
            }
            else {
              assert(!resolverContext.anyDiff,'anyDiff must be false here');
            }
          });
      }
    })
    .done(function(){
      console.log('Finishing successfully');
      fs.writeFileSync(pathLib.join(__dirname,'../metadata/httpCache.yaml'),YAML.safeDump(httpCache, {lineWidth:-1}),'utf8');
      if (newBlackList.length) {
        console.warn(utilLib.inspect(newBlackList));
      }
    });
}

function checkPreferred(dir, command) {
  var specs = util.getSpecs(dir);
  validatePreferred(specs);
}

function validateCollection(dir, command) {
  var specs = util.getSpecs(dir);

  validatePreferred(specs);

  Promise.mapSeries(_.toPairs(specs), ([filename, swagger]) => {
    console.error('======================== ' + filename + ' ================');
    assert(!_.isEmpty(swagger.paths), 'Definition should have operations');
    //FIXME: we can't do this check yet because of Amazon AWS and some others
    //_.each(swagger.paths, function (path, key) {
    //  assert(key.indexOf('?') === -1, 'Path contains hard-coded query parameters');
    //});
    //FIXME: check location
    //assert(util.getSwaggerPath(swagger) === filename, 'Incorrect location');

    var source = util.getOriginUrl(swagger);

    let f = validateSwagger;
    if (command.fix) f = validateAndFix;

    return f(swagger, source)
      .then(({errors, warnings}) => {
        if (warnings) {
          if (command.quiet) {
            _.remove(warnings, function (warning) {
              return ((warning.code === 'UNUSED_DEFINITION') || (warning.code === 'EXTRA_REFERENCE_PROPERTIES'));
            });
          }
          if (warnings.length)
            logYaml(warnings);
        }
        if (errors) {
          logYaml(errors);
          throw Error('Validation errors detected');
        }
        else {
          if (command.fix) {
            util.saveSwagger(swagger);
          }
        }
      });
  }).done();
}

function validatePreferred(specs) {
  var preferred = {};
  _.each(specs, function (swagger) {
    var id = util.getApiId(swagger);
    var version = swagger.info.version;
    var spath = util.getSwaggerPath(swagger);
    preferred[id] = preferred[id] || {};
    preferred[id][swagger.info.version] = swagger.info['x-preferred'];
    if (Object.keys(swagger.paths).length<1)
      warnings.push(`"${spath}" has no paths`);
  });

  _.each(preferred, function (versions, id) {
    if (_.size(versions) === 1) {
      let oversion = Object.keys(versions)[0];
      versions = _.values(versions); //?
      //assert(_.isUndefined(versions[0]) || versions[0] === true,
      //  'Preferred not true in "' + id + '"');
      if (versions[0] === false) {
        let swagger = specs[id.replace(':','/')+'/'+oversion+'/swagger.yaml'];
        if (swagger) {
          swagger.info["x-preferred"] = true;
          util.saveSwagger(swagger);
        }
        else console.warn('Not found',id,oversion);
      }
      return;
    }

    var seenTrue = false;
    var maxVersion = '';
    var latest = undefined;
    _.each(versions, function (value, version) {
      //assert(!_.isUndefined(value), `Missing value for "x-preferred" in "${id}" "${version}"`);
      let swagger = specs[id.replace(':','/')+'/'+version+'/swagger.yaml'];
      if (_.isUndefined(value)) {
        value = false;
        if (swagger) {
          swagger.info["x-preferred"] = value;
          util.saveSwagger(swagger);
        }
        else console.warn('Not found',id,version);
      }
      assert(_.isBoolean(value), `Non boolean value for "x-preferred" in "${id}" "${version}": "${typeof value}"`);
      assert(value !== true || !seenTrue, `Multiple preferred versions in "${id}" "${version}": "${value}"`);
      seenTrue = value || seenTrue;
      if ((version > maxVersion) && (version.indexOf('alpha')<0) && (version.indexOf('beta')<0)) {
        maxVersion = version;
        latest = swagger;
      }
    });
    if (!seenTrue) {
      if (maxVersion && latest) {
        console.warn('Forcing preferred true in',id,maxVersion);
        latest.info["x-preferred"] = true;
        util.saveSwagger(latest);
        seenTrue = true;
      }
    }
    assert(seenTrue, `At least one preferred should be true in "${id}"`);
  });
}

function addToCollection(format, url, command) {
  var exPatch = {info: {}};
  if (command.service)
    exPatch.info['x-serviceName'] = command.service;
  if (command.logo) {
    exPatch.info['x-logo'] = {
      url: command.logo
    };
    if ((command.logo && command.logo.indexOf('.jpg')<0) || command.background){
      exPatch.info['x-logo'].backgroundColor = command.background||'#FFFFFF';
    }
  }
  if (command.unofficial) {
    exPatch.info['x-unofficialSpec'] = true;
  }
  if (command.categories) {
    exPatch.info['x-apisguru-categories'] = command.categories.split(',');
  }
  if (command.desclang) {
    exPatch.info['x-description-language'] = command.desclang;
  }
  if (command.twitter) {
    exPatch.info.contact = {};
    exPatch.info.contact["x-twitter"] = command.twitter;
    exPatch.info["x-logo"] = { url: 'https://twitter.com/'+command.twitter+'/profile_image?size=original' };
  }

  writeSpec(url, format, exPatch, command)
    .catch(SpecError, error => {
      if (!command.fixup)
        throw error;

      return util.editFile(error.stack)
        .then(function (data) {
          //FIXME: regex
          var match = data.match(/^\++ Begin.*$((?:.|\n)*?)^\?+ Swagger.*$((?:.|\n)*?)^[*!~-]/m);
          if (!match || !match[1] || !match[2])
            throw Error('Can not match edited Swagger');

          var originSpec = error.context.spec;
          var originSwagger = error.context.swagger;
          if (originSpec.format !== 'swagger_2') {
            var editedOrigin = YAML.safeLoad(match[1]);
            appendFixup(getOriginFixupPath(originSpec), serializeSpec(originSpec), editedOrigin);
          }

          if (!_.isUndefined(originSwagger)) {
            var editedSwagger = YAML.safeLoad(match[2]);
            appendSwaggerFixup(originSwagger, editedSwagger);
          }
        })
    })
    .done();
}

function getOriginFixupPath(spec) {
  return '../fixes/' + encodeURIComponent(spec.source) + '.yaml';
}

function appendSwaggerFixup(swagger, editedSwagger) {
  appendFixup(util.getSwaggerPath(swagger, 'fixup.yaml'), swagger, editedSwagger);
}

function revertFixup(fixupPath, spec) {
  var fixup = util.readYaml(fixupPath);
  if (fixup)
    jsondiffpatch.unpatch(spec, fixup);
}

function saveFixup(fixupPath, spec, editedSpec) {
  var diff = jsondiffpatch.diff(spec, editedSpec);
  if (!_.isEmpty(diff))
    util.saveYaml(fixupPath, diff);
  var jpdiff = jiff.diff(spec, editedSpec, {invertible:true});
  if (!_.isEmpty(jpdiff))
    util.saveYaml(fixupPath.replace('fixup','jpdiff'), jpdiff);
}

function appendFixup(fixupPath, spec, editedSpec) {
  if (_.isEqual(spec, editedSpec))
    return;

  //Before diff we need to unpatch, it's a way to append changes
  revertFixup(fixupPath, spec);
  saveFixup(fixupPath, spec, editedSpec);
}

function updateCatalogLeads(dir,command) {
  fromLeads = true;
  var knownUrls = _.map(util.getSpecs(), util.getOriginUrl);

  let providers;
  if (dir) {
    providers = [];
    providers.push(dir.replace('/',''));
  }

  specSources.getCatalogsLeads()
    .then(function (catalogsLeads) {
      var newLeads = _(catalogsLeads).omit(knownUrls).values().value();
      return Promise.each(newLeads, writeSpecFromLead);
    })
    .done();
}

function writeSpecFromLead(lead,command) {
  var exPatch = _.cloneDeep(lead);
  var origin = util.getOrigin(exPatch);
  if (Array.isArray(origin))
    origin = origin.pop();
  var source = origin.url;
  var format = converter.getFormatName(origin.format, origin.version);

  if (!exPatch.info['x-origin'].length) {
    delete exPatch.info['x-origin'];
  }

  return writeSpec(source, format, exPatch, command);
}

function writeSpec(source, format, exPatch, command) {
  var context = {source};
  resolverContext = {
    anyDiff: false,
    called: false,
    source: source,
    format: format,
    etag: !command.slow
  };

  return converter.getSpec(source, format)
    .then(spec => {
      context.spec = spec;
      if (resolverContext.called && !resolverContext.anyDiff)
        throw Error('Warning: 304 Not modified');
      var fixup = util.readYaml(getOriginFixupPath(spec));
      jsondiffpatch.patch(spec, fixup);

      return convertToSwagger(spec,exPatch,command);
    })
    .then(swagger => {
      context.swagger = swagger;

      delete exPatch.info.version; // testing
      patchSwagger(swagger, exPatch);

      expandPathTemplates(swagger);
      replaceSpacesInSchemaNames(swagger);
      extractApiKeysFromParameters(swagger);
      simplifyProduceConsume(swagger);

      return validateAndFix(swagger, source)
    })
    .then(validation => {
      context.validation = validation;

      if (validation.errors && !command.ignore)
        throw Error('Validation errors!!!');

      if (command && command.quiet) {
        _.remove(warnings, function (warning) {
          return ((warning.code === 'UNUSED_DEFINITION') || (warning.code === 'EXTRA_REFERENCE_PROPERTIES'));
        });
      }

      if (validation.warnings)
        logYaml(validation.warnings);

      if (validation.remotesResolved) {
        context.swagger = validation.remotesResolved;
      }
      else {
        console.warn('No remotesResolved returned');
      }

      var filename = util.saveSwagger(context.swagger);

      if (_.isEmpty(context.swagger.paths))
        warnings.push(`Definition will fail validation - no paths "${filename}"`);
      if (!context.swagger.info.description)
        warnings.push(`Definition has no info.description "${filename}"`);

      delete exPatch.info['x-providerName'];
      delete exPatch.info['x-serviceName'];
      delete exPatch.info['x-preferred'];
      delete exPatch.info['x-origin'];

      if (context.swagger.host && context.swagger.host.endsWith('.local')) {
        exPatch.host = context.swagger.host;
      }

      if (Object.keys(exPatch.info).length) {
        var patchFilename = pathLib.join(util.getPathComponents(context.swagger, true).join('/'),'patch.yaml');
        var patchFilename2 = pathLib.join(util.getPathComponents(context.swagger).join('/'),'patch.yaml');
        if (!fs.existsSync(patchFilename) && !fs.existsSync(patchFilename2)) {
          console.log('* Wrote new '+patchFilename);
          fs.writeFileSync(patchFilename,YAML.safeDump(exPatch,{lineWidth:-1}),'utf8');
        }
      }

      return context.swagger;
    })
    .catch(e => {
      if (!fromLeads) {
        if (e.message.indexOf('Can not')>=0)
          e.message = 'Warning: '+e.message;
        if (resolverContext.anyDiff || (!e.message.startsWith('Warning')))
          throw new SpecError(e, context);
        console.log(e.message);
      }
      else {
        newBlackList.push(resolverContext.source);
      }
    });
}

function validateAndFix(swagger, source) {
  return validateSwagger(swagger, source)
    .then(result => {
      if (!result.errors)
        return result;

      if (fixSpec(swagger, result.errors))
        return validateAndFix(swagger, source);
      else
        return validateSwagger(swagger, source);
    });
}

//TODO: move into separate lib
var SwaggerMethods = require('swagger-methods');

function simplifyProduceConsume(swagger) {
  var operations = _(swagger.paths).values()
    .map(path => _(path).pick(SwaggerMethods).values().value())
    .flatten().value();

  var globalProduces = swagger.produces;
  var globalConsumes = swagger.consumes;
  _.each(operations, function (op) {
    if (_.isUndefined(globalProduces))
      globalProduces = op.produces;
    if (_.isUndefined(globalConsumes))
      globalConsumes = op.consumes;

    if (!_.isEqual(globalProduces || null, op.produces))
      globalProduces = null;
    if (!_.isEqual(globalConsumes || null, op.consumes))
      globalConsumes = null;
  });

  if (_.isArray(globalProduces))
    swagger.produces = globalProduces;
  if (_.isArray(globalConsumes))
    swagger.consumes = globalConsumes;

  _.each(operations, function (op) {
    if (_.isEqual(swagger.produces, op.produces))
      delete op.produces;
    if (_.isEqual(swagger.consumes, op.consumes))
      delete op.consumes;
  });
}

function extractApiKeysFromParameters(swagger) {
  if (swagger.securityDefinitions || swagger.security)
    return;

  function isApiKeyParam(param) {
    return _.some(
      [
        /^user[-_]?key$/i,
        /^api[-_]?key$/i,
        /^access[-_]?key$/i
      ],
      function (regExp) {
        return regExp.test(param.name);
      }
    );
  }

  var inAllMethods = true;
  var apiKeys = [];
  _.each(swagger.paths, function (path) {
    _(path).pick(SwaggerMethods).map('parameters').each(function (params) {
      var apiKey = _.filter(params, isApiKeyParam);

      if (_.size(apiKey) === 1)
        apiKeys.push(apiKey[0]);
      else
        inAllMethods = false;
    });
  });

  if (!inAllMethods)
    return;

  var paramName = _(apiKeys).map('name').uniq().value();
  if (_.size(paramName) !== 1)
    return;
  paramName = paramName[0];

  var paramIn = _(apiKeys).map('in').uniq().value();
  if (_.size(paramIn) !== 1)
    return;
  paramIn = paramIn[0];

  if (['header', 'query'].indexOf(paramIn) === -1)
    return;

  //Ignore duplicates, and choose longest description.
  var paramDescription = _(apiKeys).map('description').uniq().sortBy(_.size).last();

  swagger.securityDefinitions = {};
  swagger.securityDefinitions[paramName] = {
    type: 'apiKey',
    name: paramName,
    in: paramIn,
    description: paramDescription
  };

  swagger.security = [{}];
  swagger.security[0][paramName] = [];

  _.each(swagger.paths, function (path) {
    _(path).pick(SwaggerMethods).map('parameters').each(function (parameters) {
      _.remove(parameters, function (param) {
        return param.name === paramName && param.in === paramIn;
      });
    });
  });
}

function expandPathTemplates(swagger) {
  var paths = swagger.paths;
  _.each(_.keys(paths), function (path) {
    function applyParameter(pathItem, name, callback) {
      function applyParameterArray(paramArray, callback) {
        var newParamArray = [];
        _.some(paramArray, function (param, index) {
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
      });
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
    var path = error.path;
    try {
      var parentValue = jp.get(swagger, _.dropRight(path));
      var value = jp.get(swagger, path);
    }
    catch(e) {
      //FIXME: sway gives path with intermediate $refs in them
      return;
    }

    var newValue;

    switch(error.code) {
      case 'EQUIVALENT_PATH':
        swagger['x-hasEquivalentPaths'] = true;
        break;
      case 'MISSING_PATH_PARAMETER_DECLARATION':
        //TODO: add warning
        jp.remove(swagger, path);
        return true;
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
        if (value.indexOf(' ') !== -1) {
          if (value !== encodeURI(value)) {
            newValue = encodeURI(value);
          }
          else
            newValue = replaceSpaces(value);
        }
        else
          newValue = value;

        if (!swagger.definitions)
          swagger.definitions = {};

        if (typeof swagger.definitions[newValue] !== 'undefined')
          newValue = '#/definitions/' + newValue;
        else if (value.indexOf('#/definitions/#/parameters')>=0) {
          newValue = value.replace('#/definitions/','');
        }
        else {
          if ((value == newValue) && (value.startsWith('#/definitions/'))) {
            console.warn(error.code,value);
            let ptr = value.replace('#/definitions/','');
            swagger.definitions[decodeURI(ptr)] = {};
            fixed = true;
          }
        }
        break;
      case 'DUPLICATE_OPERATIONID':
        //FIXME: find better solution than to strip all duplicate 'operationId'
        var operationIds = jsonPath.query(swagger, '$.paths[*][*].operationId');
        operationIds = _.filter(operationIds, function (value, index, iteratee) {
          return _.includes(iteratee, value, index + 1);
        });
        jsonPath.apply(swagger, '$.paths[*][*].operationId', function (value) {
          if (_.find(operationIds,function(e){
            return e === value;
          })) return undefined
          else return (value ? value : undefined);
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
      case 'INVALID_TYPE':
        if (_.nth(path, -1) === 'required' && _.nth(path, -3) === 'properties'
          && error.message === 'Expected type array but found type boolean')
        {
          var objectSchema = jp.get(swagger, _.dropRight(path, 3));

          if (value) {
            objectSchema.required = objectSchema.required || [];
            var propertyName = _.nth(path, -2);
            if (objectSchema.required.indexOf(propertyName) === -1)
              objectSchema.required.push(propertyName);
          }

          delete parentValue.required;
          fixed = true;
          break;
        }

        var match = error.message.match(/^Expected type (\w+) but found type (\w+)$/);
        if (match && match[2] === 'string') {
          try {
            var tmp = JSON.parse(value);
            if (typeof tmp === match[1]) {
              newValue = tmp;
              break;
            }
          }
          catch (e) {}
        }
      case 'ENUM_MISMATCH':
      case 'INVALID_FORMAT':
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
    }
    if (!_.isUndefined(newValue)) {
      jp.set(swagger, path, newValue);
      fixed = true;
    }
  });
  return fixed;
}

function serializeSpec(spec) {
  var data = {spec: spec.spec};
  if (spec.subResources)
    data.subResources = spec.subResources;
  return data;
}

function errorToString(error, context) {
  var {source, spec, swagger, validation} = context;

  var result = '++++++++++++++++++++++++++ Begin ' + source + ' +++++++++++++++++++++\n';
  if (spec && (spec.format !== 'swagger_2' || _.isUndefined(swagger))) {
    result += util.Yaml2String(serializeSpec(spec));
  }

  result += '???????????????????? Swagger ' + source + ' ????????????????????????????\n';
  if (!_.isUndefined(swagger)) {
    result += util.Yaml2String(swagger);
    fs.writeFileSync('../tmp.yaml',util.Yaml2String(swagger),'utf8');
  }

  result += '!!!!!!!!!!!!!!!!!!!! Errors ' + source + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n';
  if (_.get(validation, 'errors'))
    result += util.Yaml2String(validation.errors);
  else
    result += error.stack + '\n';

  var warnings = (validation && validation.warnings ? validation.warnings : []);
  _.remove(warnings, function (warning) {
     return ((warning.code === 'UNUSED_DEFINITION') || (warning.code === 'EXTRA_REFERENCE_PROPERTIES'));
  });

  if (warnings.length) {
    result += '******************** Warnings ' + source + ' *************************\n';
    result += util.Yaml2String(validation.warnings);
  }
  result += '------------------------- End ' + source + ' ---------------------------\n';
  return result;
}

function validateSwagger(swagger, source) {
  let target = 'swagger_2';
  if (swagger.openapi) target = 'openapi_3';
  return converter.getSpec(swagger, target)
    .then(function(spec){
      var relativeBase = source.split('/');
      relativeBase.pop();
      relativeBase = relativeBase.join('/');
      // 'relativeBase' is for the released version of sway/json-refs, the latest version uses 'location'
      let jsonRefs = {relativeBase: relativeBase, location: source, loaderOptions: {processContent:
        function (res, cb) {
          cb(undefined, YAML.safeLoad(res.text,{json:true}));
        }
      }};
      if (source.indexOf('azure.com')>=0) {
        jsonRefs.includeInvalid = true;
        jsonRefs.resolveCirculars = true;
      }
      spec.jsonRefs = jsonRefs;
      return spec;
    })
    .then(spec => spec.validate())
    .then(result => {
      if (result.errors && swagger['x-hasEquivalentPaths']) {
        _.remove(result.errors, function (error) {
          return (error.code === 'EQUIVALENT_PATH');
        });

        if (_.isEmpty(result.errors))
          result.errors = null;
      }

      return result;
    });
}

function lintParameter(param) {
  _.each([
    { type: 'integer', prop: 'minLength'},
    { type: 'integer', prop: 'maxLength'},
    { type: 'string', prop: 'minimum'},
    { type: 'string', prop: 'maximum'},
    { type: 'string', prop: 'exclusiveMinimum'},
    { type: 'string', prop: 'exclusiveMaximum'},
    { type: 'string', prop: 'multipleOf'}
  ], function(bug) {
    if ((param.type === bug.type) && (typeof param[bug.prop] !== 'undefined'))
      delete param[bug.prop];
  });
  return param;
}

function patchSwagger(swagger, exPatch) {
  if (swagger.info.version && swagger.info.version === 'version')
    delete swagger.info.version;
  //use 1.0.0 as default version
  if (_.isUndefined(swagger.info.version))
    swagger.info.version = '1.0.0';

  if (swagger.info.logo && swagger.host === 'api.nytimes.com')
    delete swagger.info.logo;

  //swagger-converter if title is absent use host as default
  if (swagger.info.title === swagger.host)
    delete swagger.info.title;

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

  if (swagger.host && swagger.host.indexOf('googleapis.com')>=0) {
    sp.sortParameters(swagger);
    sp.sortTags(swagger);
  }

  for (var p in swagger.paths) {
    var pathItem = swagger.paths[p];
    for (var o in pathItem) {
      var op = pathItem[o];
      if (op.parameters)
        for (var param of op.parameters) {
          lintParameter(param);
        }
    }
  }

  applyMergePatch(swagger, exPatch);

  var patch = {};
  var pathComponents = util.getPathComponents(swagger);

  var path = '';
  _.each(pathComponents, function (dir) {
    path += dir + '/';
    var subPatch = util.readYaml(path + 'patch.yaml');

    if (!_.isUndefined(subPatch))
      patch = jsonPatch.merge(patch, subPatch);
  });

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

function convertToSwagger(spec,exPatch,command) {
  let target = 'swagger_2';
  if (spec.format === 'openapi_3') target = spec.format;
  return spec.convertTo(target)
    .then(swagger => {
      _.merge(swagger.spec.info, {
        'x-providerName': parseHost(swagger.spec, command.host||exPatch.info["x-providerName"])
      });
    if (typeof swagger.spec.info['x-origin'] == 'undefined')
        swagger.spec.info['x-origin'] = [];
    if (!Array.isArray(swagger.spec.info['x-origin']))
        swagger.spec.info['x-origin'] = [swagger.spec.info['x-origin']];
      var newOrigin = {
        format: spec.formatName,
        version: spec.getFormatVersion(),
        url: spec.source
      };
      if ((newOrigin.format !== 'swagger') || (newOrigin.version !== '2.0')) {
        newOrigin.converter = {
          url: 'https://github.com/lucybot/api-spec-converter',
          version: converterVersion
        };
      }
    if (!_.isEqual(_.last(swagger.spec.info['x-origin']),newOrigin))
        swagger.spec.info['x-origin'].push(newOrigin);
      return swagger.spec;
    });
}

function parseHost(swagger, altSource) {
  var swHost = swagger.host;

  if (swagger.openapi) {
    let u = url.parse(swagger.servers[0].url);
    swHost = u.hostname;
  }

  if ((swHost === 'raw.githubusercontent.com') || (swHost.endsWith('github.io')) || (swHost.indexOf('example.com')>=0) || (swHost.startsWith('localhost'))) {
    let port = '';
    if (swHost.indexOf(':')>=0) port = swHost.split(':')[1];
    swHost = altSource;
    let pd = parseDomain(swHost,{ customTlds: ["local"] });
    swagger.host = pd.domain+'.local';
    if (port) swagger.host += ':'+port;
  }

  assert(swHost, 'Missing host');
  assert(!/^localhost/.test(swHost), 'Can not add localhost API');
  assert(swHost !== 'raw.githubusercontent.com', 'Missing host + spec hosted on GitHub');
  assert(swHost !== 'virtserver.swaggerhub.com', 'Cannot add swaggerhub mock server API');
  assert(swHost !== 'example.com', 'Cannot add example.com API');

  var p = parseDomain(swHost,{ customTlds: ["local"] });
  if (!p) p = parseDomain(altSource);
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

    if ((_.isArray(target[key])) && (_.isArray(value)))
    return target[key].concat(value);

    if ((typeof target[key] !== 'undefined') && (target[key] === value))
      return value;

    if (key === 'x-providerName')
      return value;

    assert(_.isUndefined(target[key]), 'Patch tried to override property: ' + key + ' ' + target[key] + ' ' + value);
    target[key] = value;
  });
};

function logYaml(json) {
  console.error(util.Yaml2String(json));
}

process.on('exit', function() {
  if (warnings.length) {
    process.exitCode = 1;
    for (var w of warnings) {
      console.log(w);
    }
  }
  if (specSources.deletions.length) {
    for (var d of specSources.deletions) {
      console.log('Deleted? '+d);
    }
  }
  console.log('Exiting with '+process.exitCode||0);
});

