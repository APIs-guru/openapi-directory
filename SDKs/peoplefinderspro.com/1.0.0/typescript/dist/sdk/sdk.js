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
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://api.peoplefinderspro.com",
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
    // PostAddressAutocomplete - Search
    /**
     * ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIAddressAutoComplete
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Input":"1821 Q"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have parts of the address.
     *
     * + <code>Input</code> = null (optional, string) ... address.
    **/
    SDK.prototype.PostAddressAutocomplete = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostAddressAutocompleteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/address/autocomplete";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostContactEnrich - Search
    /**
     * ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIContactEnrich
     *
     * 2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * A complete list of JSON request properties follows.
     *
     * + <code>FirstName</code>= null (optional, string) ... First name.
     *
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     *
     * + <code>LastName</code> = null (optional, string) ... Last name.
     *
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     *
     * + <code>Age</code> = null (optional, int) ... Age.
     *
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    SDK.prototype.PostContactEnrich = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostContactEnrichRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/contact/enrich";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostEmailEnrich - Search
    /**
     * ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your Access Profile username and password to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIEmailID
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Email":"johnsmith@somedomain"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have an email.
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    SDK.prototype.PostEmailEnrich = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostEmailEnrichRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/email/enrich";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostPhoneEnrich - Search
    /**
     * ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPICallerID
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Phone":"(123) 456-7890"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have a phone number.
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
    **/
    SDK.prototype.PostPhoneEnrich = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostPhoneEnrichRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/phone/enrich";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Search - Search
    /**
     * ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIIDVerification
     *
     * 2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street, Unit 102",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * A complete list of JSON request properties follows.
     *
     * + <code>FirstName</code>= null (optional, string) ... First name.
     *
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     *
     * + <code>LastName</code> = null (optional, string) ... Last name.
     *
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     *
     * + <code>Age</code> = null (optional, int) ... Age.
     *
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
    **/
    SDK.prototype.Search = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/identity/verify_id";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
