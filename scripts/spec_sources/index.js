'use strict';
// @ts-check

const utilLib = require('util');

var assert = require('assert');
var _ = require('lodash');

var util = require('../util');

exports.deletions = [];

var specSources = {
  'googleapis.com': require('./google'),
  'azure.com': require('./azure'),
  'microsoft.com': require('./azure'),
  'windows.net': require('./azure'),
  'nytimes.com': require('./ny_times'),
  'swaggerhub.com': require('./swaggerhub'),
  'gov.bc.ca': require('./bcgov'),
  'bclaws.ca': require('./bcgov'),
  'box.com': require('./box'),
  'fantasydata.net': require('./fantasydata'),
  'adyen.com': require('./adyen'),
  'nexmo.com': require('./nexmo'),
  'interzoid.com': require('./interzoid')
};
var catalogProviders = _.keys(specSources);

var blockListedUrls = util.readYaml(__dirname + '/blocklist.yaml');

function providerName(info) {
  if (info.hasOwnProperty('x-providerName')) return info['x-providerName'];
  return 'interzoid.com';
}

exports.getLeads = function (specs) {
  var specsByProvider = _(specs).values()
    .groupBy(swagger => providerName(swagger.info)).value();

  var urlLeads = _(specsByProvider).omit(catalogProviders)
    .values().flatten()
    .map(swagger => ({
      info: {
        'version': swagger.info.version,
        'x-providerName': util.getProviderName(swagger),
        'x-serviceName': util.getServiceName(swagger),
        'x-origin': util.getOrigin(swagger)
      }
    })).value();

  var usedCatalogs = _(specsByProvider).keys().intersection(catalogProviders).value();
  return exports.getCatalogsLeads(usedCatalogs)
    .then(catalogLeads => {
      var leads = _(catalogLeads).values().concat(urlLeads).value();
      leads = indexByOriginUrl(leads);

      return _(specs).mapValues((swagger, filename) => {
        var lead = leads[util.getOriginUrl(swagger)];
		if (!lead) exports.deletions.push(filename);
        //assert(lead, '!!! Delete ' + filename);
        return lead;
      }).value();
    })
}

exports.getCatalogsLeads = function (providers = catalogProviders) {
  var promises = _(specSources)
    .pick(providers).values().uniq()
    .map(func => func()).value();

  return Promise.all(promises)
    .then(function (catalogsLeads) {
      var allLeads = _.flatten(catalogsLeads);
      return _.omit(indexByOriginUrl(allLeads), blockListedUrls);
    });
}

function indexByOriginUrl(leads) {
  return _(leads)
    .groupBy(util.getOriginUrl)
    .mapValues(function (array, url) {
      assert(_.size(array) === 1, `Duplicate leads for "${url}" URL. `+utilLib.inspect(array,{depth:Math.INFINITY}));
      return array[0];
    }).value();
}
