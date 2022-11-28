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
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Actions = /** @class */ (function () {
    function Actions(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * collectNow - Triggers a new collect on a specific device.
     *
     * You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.
    **/
    Actions.prototype.collectNow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectNowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/hardware/actions/{deviceId}/collect-now", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * rediscover - Triggers a new discovery on a specific device.
     *
     * You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    Actions.prototype.rediscover = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RediscoverRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/hardware/actions/{deviceId}/rediscover", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reinitialize - Sends a 'Reinitialize KM' command.
     *
     * Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
    **/
    Actions.prototype.reinitialize = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReinitializeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/hardware/actions/{deviceId}/reinitialize", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * remove - Removes a specific instance from the monitoring environment.
     *
     * You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).
    **/
    Actions.prototype.remove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/hardware/actions/{deviceId}/remove", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reset - Resets the Error Count parameter.
     *
     * Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).
    **/
    Actions.prototype.reset = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/hardware/actions/{deviceId}/reset-error-count", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Actions;
}());
export { Actions };
