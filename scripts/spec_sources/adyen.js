'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listGitHubFiles('adyen', 'adyen-openapi', 'master', 'specs/json/*.json');
  return _.map(files, filename => {
    return {
      info: {
	    'x-providerName': 'adyen.com',
        'x-serviceName': filename.split('/').pop().split('-')[0],
        'x-origin': [{
          url: util.rawGitHubUrl('adyen', 'adyen-openapi', 'master', filename),
          format: 'openapi',
          version: '3.0'
        }]
      }
    }
  });
}
