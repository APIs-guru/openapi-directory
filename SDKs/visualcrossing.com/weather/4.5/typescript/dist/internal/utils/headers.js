import { ParseParamDecorator } from "./utils";
export var headerMetadataKey = "headerParam";
export function GetHeadersFromRequest(headerParams) {
    if (headerParams == null)
        return;
    var headers = {};
    var fieldNames = Object.getOwnPropertyNames(headerParams);
    fieldNames.forEach(function (fname) {
        var headerAnn = Reflect.getMetadata(headerMetadataKey, headerParams, fname);
        if (headerAnn == null)
            return;
        var headerDecorator = ParseParamDecorator(headerAnn, fname, "simple", false);
        if (headerDecorator == null)
            return;
        var value = SerializeHeader(headerParams[fname], headerDecorator.Explode);
        if (value != "")
            headers[headerDecorator.ParamName] = value;
    });
    return headers;
}
export function GetHeadersFromResponse(headers) {
    // TODO: convert Axios response headers to map
    return new Map();
}
function SerializeHeader(header, explode) {
    var headerVals = [];
    if (Array.isArray(header)) {
        header.forEach(function (val) {
            headerVals.push(String(val));
        });
    }
    else if (header instanceof Map) {
        header.forEach(function (headerVal, headerKey) {
            if (explode)
                headerVals.push("".concat(headerKey, "=").concat(headerVal));
            else
                headerVals.push("".concat(headerKey, ",").concat(headerVal));
        });
    }
    else if (header instanceof Object) {
        Object.getOwnPropertyNames(header).forEach(function (headerKey) {
            if (explode)
                headerVals.push("".concat(headerKey, "=").concat(header[headerKey]));
            else
                headerVals.push("".concat(headerKey, ",").concat(header[headerKey]));
        });
    }
    else {
        return String(header);
    }
    return headerVals.join(",");
}
