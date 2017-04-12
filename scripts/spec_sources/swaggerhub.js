'use strict';

var _ = require('lodash');
var util = require('../util');

module.exports = function () {
  var baseUrl = 'https://api.swaggerhub.com/apis/swagger-hub/registry-api';
  var json = JSON.parse(util.exec('wget -q -O- '+baseUrl));
  var mostRecent = _.findLast(json.apis,function(e){
    return _.find(e.properties,function(e){
		return ((e.type == 'X-Published') && (e.value == 'true'));
	});
  });
  var version = _.find(mostRecent.properties,function(e){
		return (e.type == 'X-Version');
  }).value;
  console.log('SwaggerHub latest published version: '+version);
  return {
    info: {
      'x-origin': [{
        url: baseUrl+'/'+version,
        format: 'swagger',
        version: '2.0'
      }]
    }
  };
}
