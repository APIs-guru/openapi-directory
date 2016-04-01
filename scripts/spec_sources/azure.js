'use strict';

var assert = require('assert');

var _ = require('lodash');
var exec = require('child_process').execSync;

module.exports = function () {
  var regex = RegExp('^[^/]+/(([^/]+)/[^/]+/swagger/[^/]+)$');

  //TODO: use makeRequest lib to dowload archive
  var files = exec('wget -q -O- https://codeload.github.com/Azure/azure-rest-api-specs/tar.gz/master | tar -tz');
  files = files.toString().split('\n');
  return _(files).map(function (filename) {
    var result = regex.exec(filename);
    if (!result)
      return;
    return {
      info: {
        'x-serviceName': result[2],
        'x-origin': {
          url: 'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/' + result[1],
          format: 'swagger',
          version: '2.0'
        }
      }
    }
  }).compact().value();
}
