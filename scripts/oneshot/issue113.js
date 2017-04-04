'use strict';

var fs = require('fs');
var path = require('path');
var rr = require('recursive-readdir');
var yaml = require('js-yaml');

var argv = require('yargs')
	.usage('issue113 [options] [{path-to-specs}...]')
	.string('encoding')
	.alias('e','encoding')
	.default('encoding','utf8')
	.describe('encoding','encoding for input/output files')
	.count('verbose')
	.alias('v','verbose')
	.describe('verbose','increase verbosity')
	.help('h')
    .alias('h', 'help')
	.strict()
	.version(function() {
		return require('../package.json').version;
	})
	.argv;

var red = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[31m';
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';
var normal = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[0m';

var options = argv;
var failures = [];
var warnings = [];
var pass = 0;
var fail = 0;

var yamlOptions = {
	lineWidth: -1
};

function update(file) {
	var result = false;
	var components = file.split(path.sep);
	var name = components[components.length-1];

	if (name.indexOf('swagger.yaml')>=0) {

		var srcStr = fs.readFileSync(path.resolve(file),options.encoding);
		var src;
		try {
			if (name.indexOf('.yaml')>=0) {
				src = yaml.safeLoad(srcStr);
			}
			else {
				src = JSON.parse(srcStr);
			}
		}
		catch (ex) {
			var warning = 'Could not parse file '+file;
			console.log(red+warning);
			warnings.push(warning);
		}

		if (!src || ((!src.swagger && !src.openapi))) return true;
		if (!argv.quiet) console.log(normal+file);

		try {
			if ((src.info["x-origin"]) && (!Array.isArray(src.info["x-origin"]))) {
				src.info["x-origin"] = [src.info["x-origin"]];
			}
		}
		catch (ex) {
			console.log(red+'Converter threw an error: '+ex.message);
			warnings.push('Converter failed '+file);
			result = true;
		}

		try {
		var resultStr = yaml.safeDump(src, yamlOptions);
			if (!argv.quiet) {
                console.log(green+'  %s %s',src.info.title,src.info.version);
                console.log('  %s',src.swagger ? (src.host ? src.host : 'relative') : (src.servers && src.servers.length ? src.servers[0].url : 'relative'));
			}
			fs.writeFileSync(path.resolve(file),resultStr,options.encoding);
			result = true;
		}
		catch (ex) {
			if (argv.quiet) console.log(normal+file);
			console.log(red+ex.message);
			result = false;
		}
		if (result) {
			pass++;
		}
		else {
			fail++;
			if (argv.stop) process.exit(1);
		}
	}
	else {
		result = true;
	}
	return result;
}

function processPathSpec(pathspec,expectFailure) {
	pathspec = path.resolve(pathspec);
	var stats = fs.statSync(pathspec);
	if (stats.isFile()) {
		if (!update(pathspec,true,expectFailure)) {
			failures.push(pathspec);
		}
	}
	else {
		rr(pathspec, function (err, files) {
			for (var i in files) {
				if (!update(files[i],false,expectFailure)) {
					failures.push(files[i]);
				}
			}
		});
	}
}

process.exitCode = 1;
if ((!argv._.length) && (!argv.fail)) {
	argv._.push('./APIs/');
}
for (var pathspec of argv._) {
	processPathSpec(pathspec,false);
}

process.on('exit', function(code) {
	if (failures.length) {
		failures.sort();
		console.log(normal+'\nFailures:'+red);
		for (var f in failures) {
			console.log(failures[f]);
		}
	}
	if (warnings.length) {
		warnings.sort();
		console.log(normal+'\nWarnings:'+red);
		for (var w in warnings) {
			console.log(warnings[w]);
		}
	}
	console.log(normal);
	console.log('Tests: %s passing, %s failing, %s warnings', pass, fail, warnings.length);
	process.exitCode = ((fail === 0) && (pass > 0)) ? 0 : 1;
});
