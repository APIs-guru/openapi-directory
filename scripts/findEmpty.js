// script to find and remove definitions which have no paths, or paths
// but no operations

// run with a find command piped into xargs for now

const yaml = require('js-yaml');
const fs = require('fs');

for (let i=2;i<process.argv.length;i++) {
  let fname = process.argv[i];
  try {
    let api = yaml.safeLoad(fs.readFileSync(fname,'utf8'),{json:true});
    if (api && (Object.keys(api.paths).length === 0)) {
      console.warn('*',fname);
      fs.unlinkSync(fname);
    }
  }
  catch (ex) {
    console.warn('?',fname);
  }
}
