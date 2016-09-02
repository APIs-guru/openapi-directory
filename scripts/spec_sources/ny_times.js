'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('NYTimes', 'public_api_specs', '*/*.json');
  return _.map(files, filename => {
    return {
      info: {
        'x-serviceName': filename.split('/')[0],
        'x-origin': {
          url: util.rawGitHubUrl('NYTimes', 'public_api_specs', filename),
          format: 'swagger',
          version: '2.0'
        }
      }
    }
  });
}
