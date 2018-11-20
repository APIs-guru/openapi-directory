// script to find APIs with no defined security schemes

const yaml = require('js-yaml');
const fs = require('fs');

for (let i=2;i<process.argv.length;i++) {
  let fname = process.argv[i];
  let api = yaml.safeLoad(fs.readFileSync(fname,'utf8'),{json:true});
  if (api.produces && (!api.security || api.security.length === 0)) {
    let xml = false;
    for (let mime of api.produces) {
      if (mime.indexOf('xml')>=0) xml = true;
    }
    if (xml) console.log(fname);
  }
}
