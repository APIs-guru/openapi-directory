#!/usr/bin/env node
'use strict';

var crypto = require('crypto');
var fs = require('fs');

var rr = require('recursive-readdir');
var yaml = require('js-yaml');
var _ = require('lodash');

var utils = require('./util.js');
var sp = require('./sortParameters.js');

function sha256(s) {
    var shasum = crypto.createHash('sha256');
    shasum.update(s);
    return shasum.digest('hex');
}

var pathspec = process.argv.length > 2 ? process.argv[2] : 'googleapis.com';

rr(pathspec,function(err, files) {
  for (var file of files) {
      if (file.endsWith('swagger.yaml')) {
          file = file.split('\\').join('/');
          console.log(file);
          var current = fs.readFileSync(file,'utf8');
          var head = utils.exec('git show HEAD:./'+file, true);
		  if (head != '') {
          var currentHash = sha256(current);
	      var headHash = sha256(head);
          if (currentHash === headHash) {
              console.log('  Same');
          }
          else {
              var currentObj = yaml.safeLoad(current);
              var headObj = yaml.safeLoad(head);
              if (_.isEqual(currentObj, headObj)) {
                  console.log('  Equal');
              }
              else {
                  var originalHead = _.cloneDeep(headObj);
                  sp.sortParameters(headObj);
                  sp.sortParameters(currentObj);
                  sp.sortTags(headObj);
                  sp.sortTags(currentObj);

                  if (_.isEqual(currentObj, headObj)) {
                      console.log('  Same after sorting!');
                      utils.exec('git checkout HEAD '+file);
                  }
                  else {
                      console.log('  Other changes');
                      sp.sortParameters(currentObj, headObj, originalHead);
                      fs.writeFileSync(file,yaml.safeDump(currentObj,{lineWidth:-1}),'utf8');
                  }

              }

          }
          }
      }
  }
});
