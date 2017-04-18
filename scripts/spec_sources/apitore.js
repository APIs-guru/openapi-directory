'use strict';

var util = require('../util');

var _ = require('lodash');

String.prototype.toCamelCase = function camelize() {
    return this.toLowerCase().replace(/[-_ \/\.](.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

module.exports = function () {
  var listing = JSON.parse(util.exec('wget https://api.apitore.com/json/0 -O -'));
  var result = [];
  for (var api in listing) {
	var components = api.split('/');
	var apiNumber = _.last(components);
  	var entry = listing[api];
	result.push({info: {
      'version': entry.version,
      'x-providerName': 'apitore.com',
      'x-serviceName': entry.title.split('(').join('_').split(')').join('_').toCamelCase(),
	  'x-description-language': 'jp',
	  'x-logo': {
	  	'url': 'https://apitore.com/img/apis/'+apiNumber+'.jpg'
	  },
      'x-origin': [{
        url: api,
        format: 'swagger',
        version: '2.0'
      }]
     }
    });
  }
  return result;
}
