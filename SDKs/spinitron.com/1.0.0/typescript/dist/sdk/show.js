var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Show = /** @class */ (function () {
    function Show(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getShows - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
     *
     * **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
     * each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
     * Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
     *
     * In the response, `items` is an array of objects representing occurences of scheduled shows.
     *
     * You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
     * parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
     * included in the reponse.
     *
     * `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
     * {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
     * is included.
     *
     * If the request omits the {start} parameter, the server sets its value to the current time so that the filter
     * range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
     * otherwise it is *unbounded*.
     *
     * For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
     * difference between objects in `items` representing a given show will be the `start` field value.
     *
     * For an unbounded request, `items` includes *only one* occurence per show, specifically, the
     * next occurrence after {start} of all shows occuring after {start}.
     *
     * Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
     * of shows expanded into occurrences by thir shedules and repetitions.
     *
     * Objects in `items` are ordered first by `datetime` and then by `id`.
     *
    **/
    Show.prototype.getShows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/shows";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getShows200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getShowsId - Get a Show by id
     *
     * The response object represents the next occurence of the show specified by {id}.
     *
     * Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
     *
    **/
    Show.prototype.getShowsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetShowsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/shows/{id}", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.show = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Show;
}());
export { Show };
