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
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
export var ServerList = [
    "https://numbers.twilio.com",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
    }
    /**
     * createBundle - Create a new Bundle.
    **/
    SDK.prototype.createBundle = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateBundleRequest(req);
        }
        var baseURL = operations.CreateBundleServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Bundles";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundle = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createBundleCopy - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
    **/
    SDK.prototype.createBundleCopy = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateBundleCopyRequest(req);
        }
        var baseURL = operations.CreateBundleCopyServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleBundleCopy = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createEndUser - Create a new End User.
    **/
    SDK.prototype.createEndUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateEndUserRequest(req);
        }
        var baseURL = operations.CreateEndUserServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUsers";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceEndUser = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createEvaluation - Creates an evaluation for a bundle
    **/
    SDK.prototype.createEvaluation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateEvaluationRequest(req);
        }
        var baseURL = operations.CreateEvaluationServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleEvaluation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createItemAssignment - Create a new Assigned Item.
    **/
    SDK.prototype.createItemAssignment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateItemAssignmentRequest(req);
        }
        var baseURL = operations.CreateItemAssignmentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleItemAssignment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createReplaceItems - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
    **/
    SDK.prototype.createReplaceItems = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateReplaceItemsRequest(req);
        }
        var baseURL = operations.CreateReplaceItemsServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleReplaceItems = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createSupportingDocument - Create a new Supporting Document.
    **/
    SDK.prototype.createSupportingDocument = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateSupportingDocumentRequest(req);
        }
        var baseURL = operations.CreateSupportingDocumentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocuments";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceSupportingDocument = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteBundle - Delete a specific Bundle.
    **/
    SDK.prototype.deleteBundle = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteBundleRequest(req);
        }
        var baseURL = operations.DeleteBundleServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteEndUser - Delete a specific End User.
    **/
    SDK.prototype.deleteEndUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteEndUserRequest(req);
        }
        var baseURL = operations.DeleteEndUserServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteItemAssignment - Remove an Assignment Item Instance.
    **/
    SDK.prototype.deleteItemAssignment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteItemAssignmentRequest(req);
        }
        var baseURL = operations.DeleteItemAssignmentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteSupportingDocument - Delete a specific Supporting Document.
    **/
    SDK.prototype.deleteSupportingDocument = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSupportingDocumentRequest(req);
        }
        var baseURL = operations.DeleteSupportingDocumentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchBundle - Fetch a specific Bundle instance.
    **/
    SDK.prototype.fetchBundle = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchBundleRequest(req);
        }
        var baseURL = operations.FetchBundleServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundle = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchEndUser - Fetch specific End User Instance.
    **/
    SDK.prototype.fetchEndUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchEndUserRequest(req);
        }
        var baseURL = operations.FetchEndUserServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceEndUser = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchEndUserType - Fetch a specific End-User Type Instance.
    **/
    SDK.prototype.fetchEndUserType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchEndUserTypeRequest(req);
        }
        var baseURL = operations.FetchEndUserTypeServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUserTypes/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceEndUserType = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchEvaluation - Fetch specific Evaluation Instance.
    **/
    SDK.prototype.fetchEvaluation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchEvaluationRequest(req);
        }
        var baseURL = operations.FetchEvaluationServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleEvaluation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchItemAssignment - Fetch specific Assigned Item Instance.
    **/
    SDK.prototype.fetchItemAssignment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchItemAssignmentRequest(req);
        }
        var baseURL = operations.FetchItemAssignmentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundleItemAssignment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchRegulation - Fetch specific Regulation Instance.
    **/
    SDK.prototype.fetchRegulation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchRegulationRequest(req);
        }
        var baseURL = operations.FetchRegulationServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Regulations/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceRegulation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchSupportingDocument - Fetch specific Supporting Document Instance.
    **/
    SDK.prototype.fetchSupportingDocument = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchSupportingDocumentRequest(req);
        }
        var baseURL = operations.FetchSupportingDocumentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceSupportingDocument = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * fetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
    **/
    SDK.prototype.fetchSupportingDocumentType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchSupportingDocumentTypeRequest(req);
        }
        var baseURL = operations.FetchSupportingDocumentTypeServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceSupportingDocumentType = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listBundle - Retrieve a list of all Bundles for an account.
    **/
    SDK.prototype.listBundle = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListBundleRequest(req);
        }
        var baseURL = operations.ListBundleServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Bundles";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listBundleResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listBundleCopy - Retrieve a list of all Bundles Copies for a Bundle.
    **/
    SDK.prototype.listBundleCopy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListBundleCopyRequest(req);
        }
        var baseURL = operations.ListBundleCopyServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listBundleCopyResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listEndUser - Retrieve a list of all End User for an account.
    **/
    SDK.prototype.listEndUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEndUserRequest(req);
        }
        var baseURL = operations.ListEndUserServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUsers";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listEndUserResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listEndUserType - Retrieve a list of all End-User Types.
    **/
    SDK.prototype.listEndUserType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEndUserTypeRequest(req);
        }
        var baseURL = operations.ListEndUserTypeServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/EndUserTypes";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listEndUserTypeResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listEvaluation - Retrieve a list of Evaluations associated to the Bundle resource.
    **/
    SDK.prototype.listEvaluation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEvaluationRequest(req);
        }
        var baseURL = operations.ListEvaluationServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listEvaluationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listItemAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    SDK.prototype.listItemAssignment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListItemAssignmentRequest(req);
        }
        var baseURL = operations.ListItemAssignmentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listItemAssignmentResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listRegulation - Retrieve a list of all Regulations.
    **/
    SDK.prototype.listRegulation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRegulationRequest(req);
        }
        var baseURL = operations.ListRegulationServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/Regulations";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listRegulationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listSupportingDocument - Retrieve a list of all Supporting Document for an account.
    **/
    SDK.prototype.listSupportingDocument = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListSupportingDocumentRequest(req);
        }
        var baseURL = operations.ListSupportingDocumentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocuments";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listSupportingDocumentResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listSupportingDocumentType - Retrieve a list of all Supporting Document Types.
    **/
    SDK.prototype.listSupportingDocumentType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListSupportingDocumentTypeRequest(req);
        }
        var baseURL = operations.ListSupportingDocumentTypeServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v2/RegulatoryCompliance/SupportingDocumentTypes";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.listSupportingDocumentTypeResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateBundle - Updates a Bundle in an account.
    **/
    SDK.prototype.updateBundle = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateBundleRequest(req);
        }
        var baseURL = operations.UpdateBundleServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceBundle = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateEndUser - Update an existing End User.
    **/
    SDK.prototype.updateEndUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateEndUserRequest(req);
        }
        var baseURL = operations.UpdateEndUserServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceEndUser = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateSupportingDocument - Update an existing Supporting Document.
    **/
    SDK.prototype.updateSupportingDocument = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSupportingDocumentRequest(req);
        }
        var baseURL = operations.UpdateSupportingDocumentServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = utils.GenerateURL(baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.numbersV2RegulatoryComplianceSupportingDocument = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
