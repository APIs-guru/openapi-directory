#!/usr/bin/env node
// @ts-check
'use strict';

var _ = require('lodash');
var URI = require('urijs');
//var Promise = require('bluebird');

var util = require('./util');
var makeRequest = require('makeRequest');

async function promiseMapSeries(array, iterator, thisArg) {
  const length = array.length;
  const cb = arguments.length > 2 ? iterator.bind(thisArg) : iterator;
  const results = new Array(length);

  for (let i = 0; i < length; ++i) {
    results[i] = await cb(array[i], i, array);
  }

  return results;
}

makeRequest.getRaw('http://apis.guru/branding/icon-16x16.png')
.then(logo => {
  var metrics = util.readJson('deploy/v2/metrics.json');

  var badges = [
    ['APIs in collection' , metrics.numAPIs, 'orange'],
    ['Endpoints', metrics.numEndpoints, 'red'],
    ['OpenAPI specs', metrics.numSpecs, 'yellow'],
    ['Tested on', metrics.numSpecs + ' specs', 'green', logo]
  ];
  return promiseMapSeries(badges, _.spread(saveShield));
})
.done();

function saveShield(subject, status, color, icon) {
  function escape(obj) {
    return obj.toString().replace(/_/g, '__').replace(/-/g, '--').replace(/ /g, '_');
  }

  subject = escape(subject);
  status = escape(status);

  var url = new URI(`https://img.shields.io/badge/${subject}-${status}-${color}.svg`);
  if (icon) {
    var base64 = URI.encodeQuery(icon.toString('base64'));
    url.addQuery('logo', 'data:image/png;base64,' + base64);
  }

  return makeRequest.getRaw(url.href(), { retries: 10 })
  .then(data => {
    util.saveFile(`deploy/badges/${subject.toLowerCase()}.svg`, data);
  });
}
