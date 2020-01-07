// script to find APIs which are not natively swagger_2 or openapi_3
// use with a find command piped to xargs for now

const yaml = require('js-yaml');
const fs = require('fs');
const util = require('util');

for (let i=2;i<process.argv.length;i++) {
  let fname = process.argv[i];
  let api = yaml.safeLoad(fs.readFileSync(fname,'utf8'),{json:true});
  let origin = api.info["x-origin"];
  if (origin && origin.length) {
    origin = origin.pop();
    if (origin.converter && origin.format !== 'openapi') console.log(fname);
  }
}
