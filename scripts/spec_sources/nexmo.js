'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('nexmo', 'api-specification', 'master', 'definitions/*.yml');
  return _.map(files, filename => {
    return {
      info: {
	    'x-providerName': 'nexmo.com',
        'x-serviceName': filename.split('/').pop().replace('.yml',''),
        'x-origin': [{
          url: util.rawGitHubUrl('nexmo', 'api-specification', 'master', filename),
          format: 'openapi',
          version: '3.0'
        }]
      }
    }
  });
}
