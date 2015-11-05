#!/usr/bin/env node
'use strict';

var fs = require('fs');
var sortobject = require('deep-sort-object');

var file = process.argv[2];

var data = fs.readFileSync(file, 'utf-8');
var json = JSON.parse(data);
json = sortobject(json);
data = JSON.stringify(json, null, 2) + '\n';
fs.writeFileSync(file, data);
