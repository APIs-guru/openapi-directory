'use strict';

var assert = require('assert');

var _ = require('lodash');
var Promise = require('bluebird');
var makeRequest = require('makeRequest');

module.exports = function () {
  return makeRequest('get', 'https://www.googleapis.com/discovery/v1/apis')
    .spread(function(response, data) {
      data = JSON.parse(data);
      assert.equal(data.kind, 'discovery#directoryList');
      assert.equal(data.discoveryVersion, 'v1');

      return _.map(data.items, function (value) {
        return {
          info: {
            'x-serviceName': value.name,
            'x-preferred': value.preferred,
            'x-origin': {
              url: value.discoveryRestUrl,
              format: 'google',
              version: 'v1'
            }
          }
        };
      });
    });
}

