'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

function serviceName(filename) {
  var components = filename.split('/');
  var name = components.pop();
  if (name == 'openapi-v2.json')
    return 'content'
  else
    return name.split('.')[0];
}

module.exports = function () {
  var files = util.listGitHubFiles('box', 'box-openapi', 'master', '*/*.json');
  return _.map(files, filename => {
    return {
      info: {
        'x-providerName': 'box.com',
        'x-serviceName': serviceName(filename),
        'x-origin': [{
          url: util.rawGitHubUrl('box', 'box-openapi', 'master', filename),
          format: 'swagger',
          version: '2.0'
        }]
      }
    }
  });
}
