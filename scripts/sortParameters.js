var util = require('util');

var _ = require('lodash');

function sortPFunc(a,b) {
    if (a.$ref && b.$ref) {
        if (a.$ref < b.$ref) return -1;
        if (a.$ref > b.$ref) return +1;
        return 0;
    }
    if (a.name < b.name) return -1;
    if (a.name > b.name) return +1;
    if (a.in < b.in) return -1;
    if (a.in > b.in) return +1;
    return 0;
}

function sortParameters(swagger, comparison, source) {
    for (var p in swagger.paths) {
        var pathItem = swagger.paths[p];
        for (var o in pathItem) {
            if (o === 'parameters') {
                pathItem.parameters = pathItem.parameters.sort(sortPFunc);
                if (comparison && comparison.paths[p] && comparison.paths[p].parameters && 
                    _.isEqual(pathItem.parameters, comparison.paths[p].parameters)) {
                    pathItem.parameters = source.paths[p].parameters;
                }
            }
            else {
                var op = pathItem[o];
                if (op.parameters) {
                    op.parameters = op.parameters.sort(sortPFunc);
                    if (comparison && comparison.paths[p] && comparison.paths[p][o] && comparison.paths[p][o].parameters && 
                        _.isEqual(op.parameters, comparison.paths[p][o].parameters)) {
                        op.parameters = source.paths[p][o].parameters;
                    }
                }
            }
        }
    }    
}

function sortTFunc(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return +1;
    return 0;
}

function sortTags(swagger) {
    if (swagger.tags) {
        swagger.tags = swagger.tags.sort(sortTFunc);
    }
}

module.exports = {
    sortParameters : sortParameters,
    sortTags : sortTags
};