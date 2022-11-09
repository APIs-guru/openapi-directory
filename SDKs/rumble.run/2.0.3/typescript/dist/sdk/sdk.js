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
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://console.rumble.run/api/v1.0",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // CreateAccountCredential - Create a new credential
    SDK.prototype.CreateAccountCredential = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountCredentialRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/credentials";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.credential = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateAccountKey - Create a new key
    SDK.prototype.CreateAccountKey = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/keys";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.apiKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateAccountOrganization - Create a new organization
    SDK.prototype.CreateAccountOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/orgs";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateAccountUser - Create a new user account
    SDK.prototype.CreateAccountUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountUserRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/users";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.user = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateAccountUserInvite - Create a new user account and send an email invite
    SDK.prototype.CreateAccountUserInvite = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountUserInviteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/users/invite";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.user = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateScan - Create a scan task for a given site
    SDK.prototype.CreateScan = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateScanRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/sites/{site_id}/scan", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.task = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateSite - Create a new site
    SDK.prototype.CreateSite = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateSiteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/sites";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.site = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteAccountOrganizationExportToken - Removes the export token from the specified organization
    SDK.prototype.DeleteAccountOrganizationExportToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAccountOrganizationExportTokenRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/orgs/{org_id}/exportToken", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportAssetsCsv - Asset inventory as CSV
    SDK.prototype.ExportAssetsCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportAssetsCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportAssetsCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportAssetsCiscoCsv - Cisco serial number and model name export for Cisco Smart Net Total Care Service.
    SDK.prototype.ExportAssetsCiscoCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportAssetsCiscoCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.cisco.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportAssetsCiscoCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportAssetsJson - Exports the asset inventory
    SDK.prototype.ExportAssetsJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportAssetsJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assets = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportAssetsJsonl - Asset inventory as JSON line-delimited
    SDK.prototype.ExportAssetsJsonl = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportAssetsJsonlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.jsonl";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.exportAssetsJsonl200ApplicationJsonBinaryString = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportAssetsNmapXml - Asset inventory as Nmap-style XML
    SDK.prototype.ExportAssetsNmapXml = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportAssetsNmapXmlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.nmap.xml";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportAssetsNmapXml200TextXmlBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportEventsJson - System event log as JSON
    SDK.prototype.ExportEventsJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportEventsJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/events.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.events = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportEventsJsonl - System event log as JSON line-delimited
    SDK.prototype.ExportEventsJsonl = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportEventsJsonlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/events.jsonl";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.events = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportServicesCsv - Service inventory as CSV
    SDK.prototype.ExportServicesCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportServicesCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/services.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportServicesCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportServicesJson - Service inventory as JSON
    SDK.prototype.ExportServicesJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportServicesJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/services.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.services = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportServicesJsonl - Service inventory as JSON line-delimited
    SDK.prototype.ExportServicesJsonl = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportServicesJsonlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/services.jsonl";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.exportServicesJsonl200ApplicationJsonBinaryString = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportSitesCsv - Site list as CSV
    SDK.prototype.ExportSitesCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportSitesCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/sites.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportSitesCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportSitesJson - Export all sites
    SDK.prototype.ExportSitesJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportSitesJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/sites.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.sites = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportSitesJsonl - Site list as JSON line-delimited
    SDK.prototype.ExportSitesJsonl = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportSitesJsonlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/sites.jsonl";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.exportSitesJsonl200ApplicationJsonBinaryString = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportWirelessCsv - Wireless inventory as CSV
    SDK.prototype.ExportWirelessCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportWirelessCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/wireless.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.exportWirelessCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportWirelessJson - Wireless inventory as JSON
    SDK.prototype.ExportWirelessJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportWirelessJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/wireless.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.wirelesses = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ExportWirelessJsonl - Wireless inventory as JSON line-delimited
    SDK.prototype.ExportWirelessJsonl = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ExportWirelessJsonlRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/wireless.jsonl";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.exportWirelessJsonl200ApplicationJsonBinaryString = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountAgents - Get all agents across all organizations
    SDK.prototype.GetAccountAgents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountAgentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/agents";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agents = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountCredential - Get credential details
    SDK.prototype.GetAccountCredential = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountCredentialRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/credentials/{credential_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.credential = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountCredentials - Get all account credentials
    SDK.prototype.GetAccountCredentials = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountCredentialsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/credentials";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.credentials = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountKey - Get key details
    SDK.prototype.GetAccountKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/keys/{key_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountKeys - Get all active API keys
    SDK.prototype.GetAccountKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountKeysRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/keys";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.apiKeys = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountLicense - Get license details
    SDK.prototype.GetAccountLicense = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountLicenseRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/license";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountOrganization - Get organization details
    SDK.prototype.GetAccountOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/orgs/{org_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountOrganizations - Get all organization details
    SDK.prototype.GetAccountOrganizations = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountOrganizationsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/orgs";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organizations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountSites - Get all sites details across all organizations
    SDK.prototype.GetAccountSites = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountSitesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/sites";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.sites = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountTasks - Get all task details across all organizations (up to 1000)
    SDK.prototype.GetAccountTasks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountTasksRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/tasks";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tasks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountUser - Get user details
    SDK.prototype.GetAccountUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountUserRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAccountUsers - Get all users
    SDK.prototype.GetAccountUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountUsersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/users";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.users = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAgent - Get details for a single agent
    SDK.prototype.GetAgent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAgentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/agents/{agent_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agent = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAgents - Get all agents
    SDK.prototype.GetAgents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAgentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/agents";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agents = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAsset - Get asset details
    SDK.prototype.GetAsset = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAssetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/assets/{asset_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.asset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAssets - Get all assets
    SDK.prototype.GetAssets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAssetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/assets";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assets = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetKey - Get API key details
    SDK.prototype.GetKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/key";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.apiKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetLatestAgentVersion - Returns latest agent version
    SDK.prototype.GetLatestAgentVersion = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/releases/agent/version";
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.componentVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetLatestPlatformVersion - Returns latest platform version
    SDK.prototype.GetLatestPlatformVersion = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/releases/platform/version";
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.componentVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetLatestScannerVersion - Returns latest scanner version
    SDK.prototype.GetLatestScannerVersion = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/releases/scanner/version";
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.componentVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOrganization - Get organization details
    SDK.prototype.GetOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetService - Get service details
    SDK.prototype.GetService = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetServiceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/services/{service_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.service = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetServices - Get all services
    SDK.prototype.GetServices = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetServicesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/services";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.services = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSite - Get site details
    SDK.prototype.GetSite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSiteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/sites/{site_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.site = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSites - Get all sites
    SDK.prototype.GetSites = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSitesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/sites";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.sites = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTask - Get task details
    SDK.prototype.GetTask = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.task = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTaskChangeReport - Returns a temporary task change report data url
    SDK.prototype.GetTaskChangeReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTaskChangeReportRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}/changes", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTaskScanData - Returns a temporary task scan data url
    SDK.prototype.GetTaskScanData = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTaskScanDataRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}/data", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTasks - Get all tasks (last 1000)
    SDK.prototype.GetTasks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTasksRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/tasks";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tasks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWirelessLan - Get wireless LAN details
    SDK.prototype.GetWirelessLan = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWirelessLanRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/wirelesss/{wireless_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.wireless = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWirelessLaNs - Get all wireless LANs
    SDK.prototype.GetWirelessLaNs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWirelessLaNsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/wireless";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.wirelesses = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // HideTask - Signal that a completed task should be hidden
    SDK.prototype.HideTask = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.HideTaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}/hide", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ImportScanData - Import a scan data file into a site
    SDK.prototype.ImportScanData = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ImportScanDataRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/sites/{site_id}/import", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.task = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAccountCredential - Remove this credential
    SDK.prototype.RemoveAccountCredential = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAccountCredentialRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/credentials/{credential_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAccountKey - Remove this key
    SDK.prototype.RemoveAccountKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAccountKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/keys/{key_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAccountOrganization - Remove this organization
    SDK.prototype.RemoveAccountOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAccountOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/orgs/{org_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAccountUser - Remove this user
    SDK.prototype.RemoveAccountUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAccountUserRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAgent - Remove and uninstall an agent
    SDK.prototype.RemoveAgent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAgentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/agents/{agent_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveAsset - Remove an asset
    SDK.prototype.RemoveAsset = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveAssetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/assets/{asset_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveKey - Remove the current API key
    SDK.prototype.RemoveKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/key";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveService - Remove a service
    SDK.prototype.RemoveService = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveServiceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/services/{service_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveSite - Remove a site and associated assets
    SDK.prototype.RemoveSite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveSiteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/sites/{site_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveWirelessLan - Remove a wireless LAN
    SDK.prototype.RemoveWirelessLan = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveWirelessLanRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/wirelesss/{wireless_id}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ResetAccountUserLockout - Resets the user's lockout status
    SDK.prototype.ResetAccountUserLockout = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResetAccountUserLockoutRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}/resetLockout", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ResetAccountUserMfa - Resets the user's MFA tokens
    SDK.prototype.ResetAccountUserMfa = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResetAccountUserMfaRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}/resetMFA", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ResetAccountUserPassword - Sends the user a password reset email
    SDK.prototype.ResetAccountUserPassword = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResetAccountUserPasswordRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}/resetPassword", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RotateAccountKey - Rotates the key secret
    SDK.prototype.RotateAccountKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RotateAccountKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/keys/{key_id}/rotate", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.apiKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RotateAccountOrganizationExportToken - Rotates the organization export token and returns the updated organization
    SDK.prototype.RotateAccountOrganizationExportToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RotateAccountOrganizationExportTokenRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/orgs/{org_id}/exportToken/rotate", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RotateKey - Rotate the API key secret and return the updated key
    SDK.prototype.RotateKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RotateKeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org/key/rotate";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .patch(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.apiKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SnowExportAssetsCsv - Export an asset inventory as CSV for ServiceNow integration
    SDK.prototype.SnowExportAssetsCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SnowExportAssetsCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.servicenow.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.snowExportAssetsCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SnowExportAssetsJson - Exports the asset inventory as JSON
    SDK.prototype.SnowExportAssetsJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SnowExportAssetsJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets.servicenow.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetServiceNows = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SnowExportServicesCsv - Export a service inventory as CSV for ServiceNow integration
    SDK.prototype.SnowExportServicesCsv = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SnowExportServicesCsvRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/services.servicenow.csv";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.snowExportServicesCsv200TextCsvBinaryString = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SplunkAssetSyncCreatedJson - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
    SDK.prototype.SplunkAssetSyncCreatedJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SplunkAssetSyncCreatedJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets/sync/created/assets.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetsWithCheckpoint = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SplunkAssetSyncUpdatedJson - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
    SDK.prototype.SplunkAssetSyncUpdatedJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SplunkAssetSyncUpdatedJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/export/org/assets/sync/updated/assets.json";
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetsWithCheckpoint = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StopTask - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
    SDK.prototype.StopTask = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StopTaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}/stop", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateAccountOrganization - Update organization details
    SDK.prototype.UpdateAccountOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAccountOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/orgs/{org_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateAccountUser - Update a user's details
    SDK.prototype.UpdateAccountUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAccountUserRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/account/users/{user_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateAgentSite - Update the site associated with agent
    SDK.prototype.UpdateAgentSite = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAgentSiteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/agents/{agent_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.agent = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateAssetComments - Update asset comments
    SDK.prototype.UpdateAssetComments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAssetCommentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/assets/{asset_id}/comments", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.asset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateAssetTags - Update asset tags
    SDK.prototype.UpdateAssetTags = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAssetTagsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/assets/{asset_id}/tags", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.asset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateOrganization - Update organization details
    SDK.prototype.UpdateOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateOrganizationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/org";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.organization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateSite - Update a site definition
    SDK.prototype.UpdateSite = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSiteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/sites/{site_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.site = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateTask - Update task parameters
    SDK.prototype.UpdateTask = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateTaskRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/tasks/{task_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.task = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpgradeAgent - Force an agent to update and restart
    SDK.prototype.UpgradeAgent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpgradeAgentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/org/agents/{agent_id}/update", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
