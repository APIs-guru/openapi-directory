'use strict';

var util = require('../util');

var _ = require('lodash');

module.exports = function () {
  const apisjson = JSON.parse(util.exec('wget https://oas.interzoid.com/apis.json -O -'));
  const result = [];
  for (var api in apisjson.apis) {
	  var components = api.split('/');
	  var apiNumber = _.last(components);
    var entry = apisjson.apis[api];
    const swaggerProp = entry.properties.find(function(e) {
      return e.type === 'Swagger';
    });
    const swaggerUrl = swaggerProp.url;
	  result.push({info: {
      'version': entry.version,
      'x-providerName': 'interzoid.com',
      'x-serviceName': swaggerUrl.split('/').pop().replace('.json',''),
      'x-origin': [{
        url: swaggerUrl,
        format: 'openapi',
        version: '3.0'
      }]
    }});
  }
  return result;
}

