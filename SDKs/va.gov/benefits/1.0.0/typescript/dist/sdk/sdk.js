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
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://sandbox-api.va.gov/services/vba_documents/{version}",
    "https://api.va.gov/services/vba_documents/{version}",
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
    // GetBenefitsDocumentUploadDownload - Download zip of "what the server sees"
    /**
     * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
    **/
    SDK.prototype.GetBenefitsDocumentUploadDownload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBenefitsDocumentUploadDownloadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/uploads/{id}/download", req.pathParams);
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
                    if (MatchContentType(contentType, "application/zip")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.getBenefitsDocumentUploadDownload200ApplicationZipBinaryString = out;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadDownload401ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadDownload403ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadDownload404ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 429:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadDownload429ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadDownload500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetBenefitsDocumentUploadStatus - Get status for a previous benefits document upload
    SDK.prototype.GetBenefitsDocumentUploadStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBenefitsDocumentUploadStatusRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/uploads/{id}", req.pathParams);
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
                        res.getBenefitsDocumentUploadStatus200ApplicationJsonAny = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatus401ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatus403ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatus404ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 429:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatus429ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatus500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetBenefitsDocumentUploadStatusReport - Get a bulk status report for a list of previous uploads
    SDK.prototype.GetBenefitsDocumentUploadStatusReport = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBenefitsDocumentUploadStatusReportRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/uploads/report";
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
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport401ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport403ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 429:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport429ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getBenefitsDocumentUploadStatusReport500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostBenefitsDocumentUpload - Get a location for subsequent document upload PUT request
    SDK.prototype.PostBenefitsDocumentUpload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostBenefitsDocumentUploadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/uploads";
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
                case 202:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload202ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload401ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload403ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 429:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload429ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.postBenefitsDocumentUpload500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutBenefitsDocumentUpload - Accepts document upload.
    /**
     * Accepts document metadata, document binary, and attachment binaries.Full URL, including
     * query parameters, provided from POST `/document_uploads`.
     *
     * ## Example Payload
     *
     * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
     * endpoint. Most programming languages should have provisions for assembling a multipart
     * payload like this without having to do so manually.
     *
     * ```
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="metadata"
     * Content-Type: application/json
     *
     * {"veteranFirstName": "Jane",
     * "veteranLastName": "Doe",
     * "fileNumber": "012345678",
     * "zipCode": "97202",
     * "source": "MyVSO",
     * "docType": "21-22"
     * "businessLine": "CMP"}
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="content"
     * Content-Type: application/pdf
     *
     * <Binary PDF contents>
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="attachment1"
     * Content-Type: application/pdf
     *
     * <Binary PDF attachment contents>
     * --17de1ed8f01442b2a2d7a93506314b76--
     * ```
     *
     * This PUT request would have an overall HTTP Content-Type header:
     *
     * ```
     * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
     * ```
     *
     * Note that the Content-Disposition parameter "name" in each part must be the expected values
     * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named
     * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
     * are invalid.
     *
     * This is an example curl command:
     *
     * ```
     * curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
     * ```
     *
    **/
    SDK.prototype.PutBenefitsDocumentUpload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutBenefitsDocumentUploadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/path";
        var client = this.defaultClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.putBenefitsDocumentUpload401ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.putBenefitsDocumentUpload422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 429:
                    if (MatchContentType(contentType, "application/json")) {
                        res.putBenefitsDocumentUpload429ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.putBenefitsDocumentUpload500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
