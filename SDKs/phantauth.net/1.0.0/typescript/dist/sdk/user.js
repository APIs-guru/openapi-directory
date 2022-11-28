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
var User = /** @class */ (function () {
    function User(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getUserUsername - Get a User
     *
     * Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
     * In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
     * In lack of a user name, all calls generate a different user object to the randomly generated user name.
     *
     * By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
     *
     * If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
     * In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
     *
     * The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
     * The members of a team are users randomly generated from the team name.
    **/
    User.prototype.getUserUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserUsernameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/{username}", req.pathParams);
        var client = this._defaultClient;
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
                        res.getUserUsername200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserUsernameTokenKind - Get a User Token
     *
     * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
     *
     * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
     * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
    **/
    User.prototype.getUserUsernameTokenKind = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserUsernameTokenKindRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/{username}/token/{kind}", req.pathParams);
        var client = this._defaultClient;
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postUser - Create a User Selfie
     *
     * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
     * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
     * By the use of a selfie token, you can use your own user objects during the authentication process.
     *
     * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
    **/
    User.prototype.postUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user";
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
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return User;
}());
export { User };
