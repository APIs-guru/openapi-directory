'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('bcgov', 'api-specs', 'master', '*/*.json');
  return _.map(files, filename => {
    return {
      info: {
        'x-providerName': 'gov.bc.ca',
        'x-serviceName': filename.split('/')[0],
        'x-origin': [{
          url: util.rawGitHubUrl('bcgov', 'api-specs', 'master', filename),
          format: 'swagger',
          version: '2.0'
        }]
      }
    }
  });
}
