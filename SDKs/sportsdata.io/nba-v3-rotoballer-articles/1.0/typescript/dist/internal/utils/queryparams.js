import qs from "qs";
import { ParseParamDecorator } from "./utils";
export var qpMetadataKey = "queryParam";
export function GetQueryParamSerializer(queryParams) {
    var paramsSerializer = {
        encode: FormSerializerExplode,
    };
    if (queryParams == null)
        return paramsSerializer;
    var fieldNames = Object.getOwnPropertyNames(queryParams);
    fieldNames.forEach(function (fname) {
        var qpAnn = Reflect.getMetadata(qpMetadataKey, queryParams, fname);
        if (qpAnn == null)
            return { encode: function (params) { return ""; } };
        var qpDecorator = ParseParamDecorator(qpAnn, fname, "form", true);
        if (qpDecorator == null)
            return;
        if (qpDecorator.Serialization === "json")
            paramsSerializer = {
                encode: function (params) {
                    return JSON.stringify(params);
                },
            };
        else {
            switch (qpDecorator.Style) {
                case "deepObject":
                    paramsSerializer = {
                        encode: function (params) {
                            return qs.stringify(params, { arrayFormat: "repeat" });
                        },
                    };
                    break;
                case "form":
                    if (qpDecorator.Explode) {
                        paramsSerializer = {
                            encode: FormSerializerExplode,
                        };
                    }
                    else {
                        paramsSerializer = {
                            encode: FormSerializer,
                        };
                    }
                    break;
                default:
                    // go to next query parameter field, assume first implemented serializer will serialize all query parameters for this request
                    return;
            }
        }
    });
    return paramsSerializer;
}
function FormSerializer(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(value));
        else if (Array.isArray(value)) {
            var values = value.join(",");
            query.push("".concat(key, "=").concat(values));
        }
        else {
            var values = Object.entries(Object.assign({}, value))
                .map(function (_a) {
                var objKey = _a[0], objValue = _a[1];
                return "".concat(objKey, ",").concat(objValue);
            })
                .join(",");
            query.push("".concat(key, "=").concat(values));
        }
    });
    return query.join("&");
}
function FormSerializerExplode(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(value));
        else if (Array.isArray(value)) {
            query.push(value.map(function (aValue) { return "".concat(key, "=").concat(aValue); }).join("&"));
        }
        else
            query.push(Object.entries(Object.assign({}, value))
                .map(function (_a) {
                var objKey = _a[0], objValue = _a[1];
                return "".concat(objKey, "=").concat(objValue);
            })
                .join("&"));
    });
    return query.join("&");
}
