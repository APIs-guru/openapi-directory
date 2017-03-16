'use strict';

var Path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('Azure', 'azure-rest-api-specs', '*/swagger/*.json');

  //Workaround
  files = _.filter(files, x => (x.split('/').length == 4));

  return _.map(files, filename => {

    //Workaround for https://github.com/Azure/azure-rest-api-specs/issues/229
    var service = filename.split('/')[0];
    var basename = Path.basename(filename, '.json');
    if (['arm-compute', 'arm-machinelearning', 'arm-apimanagement'].indexOf(service) !== -1
      && !service.endsWith(basename)) {
      service += '-' + basename;
    }

    return {
      info: {
        'x-serviceName': service,
        'x-origin': {
          url: util.rawGitHubUrl('Azure', 'azure-rest-api-specs', filename),
          format: 'swagger',
          version: '2.0'
        }
      }
    }
  });
}
