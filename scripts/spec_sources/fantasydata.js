'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var files = util.listZipFiles('https://fantasydata.com/downloads/swagger/fantasydata-swagger.zip', '^.*\.json');
  return _.map(files, filename => {
    return {
      info: {
	    'x-providerName': 'fantasydata.com',
        'x-serviceName': filename.split('.')[0],
        'x-origin': [{
          url: 'https://fantasydata.com/downloads/swagger/'+filename,
          format: 'swagger',
          version: '2.0'
        }]
      }
    }
  });
}
