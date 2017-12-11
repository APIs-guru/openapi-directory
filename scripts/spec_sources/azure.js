'use strict';

var Path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('Azure', 'azure-rest-api-specs', 'current', 'specification/**/*.json');

  files = _.filter(files, x => ((x.indexOf('examples')<0) && (x.indexOf('settings')<0)));

  return _.map(files, filename => {

    var service = filename.split('/')[1];
    if (service.endsWith('_API'))
      service = service.replace('_API','');
    var basename = Path.basename(filename, '.json');
    if (!service.endsWith(basename)) {
      service += '-' + basename;
    }

    console.warn(util.rawGitHubUrl('Azure', 'azure-rest-api-specs', 'current', filename));
    console.warn(service);

    return {
      info: {
        'x-providerName': 'azure.com',
        'x-serviceName': service,
        'x-origin': [{
          url: util.rawGitHubUrl('Azure', 'azure-rest-api-specs', 'current', filename),
          format: 'swagger',
          version: '2.0'
        }]
      }
    }
  });
}
