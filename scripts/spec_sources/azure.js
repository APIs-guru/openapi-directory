'use strict';

var path = require('path');
var assert = require('assert');

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var regex = RegExp('^[^/]+/(([^/]+)/[^/]+/swagger/[^/]+)$');

  //TODO: use makeRequest lib to dowload archive
  var files = util.exec('wget -q -O- https://codeload.github.com/Azure/azure-rest-api-specs/tar.gz/master | tar -tz');
  return _(files).split('\n').map(function (filename) {
    var result = regex.exec(filename);
    if (!result)
      return;

    //Workaround for https://github.com/Azure/azure-rest-api-specs/issues/229
    var service = result[2];
    var filename = path.basename(result[1], '.json');
    if (service === 'arm-compute' && !service.endsWith(filename))
      service += '-' + filename;

    return {
      info: {
        'x-serviceName': service,
        'x-origin': {
          url: 'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/' + result[1],
          format: 'swagger',
          version: '2.0'
        }
      }
    }
  }).compact().value();
}
