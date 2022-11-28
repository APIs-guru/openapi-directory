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
import { Security } from "./models/shared";
export var ServerList = [
    "https://api.tvmaze.com/v1",
    "http://api.tvmaze.com/v1",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
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
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
    }
    /**
     * deleteUserEpisodesEpisodeId - Unmark an episode
    **/
    SDK.prototype.deleteUserEpisodesEpisodeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserFollowsNetworksNetworkId - Unfollow a network
    **/
    SDK.prototype.deleteUserFollowsNetworksNetworkId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserFollowsNetworksNetworkIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserFollowsPeoplePersonId - Unfollow a person
    **/
    SDK.prototype.deleteUserFollowsPeoplePersonId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserFollowsPeoplePersonIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserFollowsShowsShowId - Unfollow a show
    **/
    SDK.prototype.deleteUserFollowsShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserFollowsShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserFollowsWebchannelsWebchannelId - Unfollow a webchannel
    **/
    SDK.prototype.deleteUserFollowsWebchannelsWebchannelId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserFollowsWebchannelsWebchannelIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserTagsTagId - Delete a specific tag
    **/
    SDK.prototype.deleteUserTagsTagId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserTagsTagIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/tags/{tag_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserTagsTagIdShowsShowId - Untag a show
    **/
    SDK.prototype.deleteUserTagsTagIdShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserTagsTagIdShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserVotesEpisodesEpisodeId - Remove an episode vote
    **/
    SDK.prototype.deleteUserVotesEpisodesEpisodeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserVotesEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUserVotesShowsShowId - Remove a show vote
    **/
    SDK.prototype.deleteUserVotesShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUserVotesShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAuthValidate - Validate your authentication credentials
     *
     * If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
    **/
    SDK.prototype.getAuthValidate = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/auth/validate";
        var client = this._securityClient;
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
                        res.getAuthValidate200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getScrobbleShowsShowId - List watched and acquired episodes for a show
     *
     * This endpoint can be used by all users, even without premium
    **/
    SDK.prototype.getScrobbleShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetScrobbleShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/scrobble/shows/{show_id}", req.pathParams);
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
                        res.markedEpisodes = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserEpisodes - List the marked episodes
    **/
    SDK.prototype.getUserEpisodes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserEpisodesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/episodes";
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
                        res.markedEpisodes = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserEpisodesEpisodeId - Check if an episode is marked
    **/
    SDK.prototype.getUserEpisodesEpisodeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.markedEpisode = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsNetworks - List the followed networks
    **/
    SDK.prototype.getUserFollowsNetworks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsNetworksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/follows/networks";
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
                        res.networkFollows = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsNetworksNetworkId - Check if a network is followed
    **/
    SDK.prototype.getUserFollowsNetworksNetworkId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsNetworksNetworkIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.networkFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsPeople - List the followed people
    **/
    SDK.prototype.getUserFollowsPeople = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsPeopleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/follows/people";
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
                        res.personFollows = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsPeoplePersonId - Check if a person is followed
    **/
    SDK.prototype.getUserFollowsPeoplePersonId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsPeoplePersonIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.personFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsShows - List the followed shows
    **/
    SDK.prototype.getUserFollowsShows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsShowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/follows/shows";
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
                        res.showFollows = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsShowsShowId - Check if a show is followed
    **/
    SDK.prototype.getUserFollowsShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.showFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsWebchannels - List the followed webchannels
    **/
    SDK.prototype.getUserFollowsWebchannels = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsWebchannelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/follows/webchannels";
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
                        res.webchannelFollows = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserFollowsWebchannelsWebchannelId - Check if a webchannel is followed
    **/
    SDK.prototype.getUserFollowsWebchannelsWebchannelId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserFollowsWebchannelsWebchannelIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.webchannelFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserTags - List all tags
    **/
    SDK.prototype.getUserTags = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/tags";
        var client = this._securityClient;
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
                        res.tags = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserTagsTagIdShows - List all shows under this tag
    **/
    SDK.prototype.getUserTagsTagIdShows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserTagsTagIdShowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows", req.pathParams);
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
                        res.tagInstances = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserVotesEpisodes - List the episodes voted for
    **/
    SDK.prototype.getUserVotesEpisodes = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/votes/episodes";
        var client = this._securityClient;
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
                        res.episodeVotes = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserVotesEpisodesEpisodeId - Check if an episode is voted for
    **/
    SDK.prototype.getUserVotesEpisodesEpisodeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserVotesEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.episodeVote = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserVotesShows - List the shows voted for
    **/
    SDK.prototype.getUserVotesShows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserVotesShowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/votes/shows";
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
                        res.showVotes = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getUserVotesShowsShowId - Check if a show is voted for
    **/
    SDK.prototype.getUserVotesShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserVotesShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
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
                        res.showVote = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * patchUserTagsTagId - Update a specific tag
    **/
    SDK.prototype.patchUserTagsTagId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchUserTagsTagIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/tags/{tag_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.tag = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postAuthPoll - Poll whether an authentication request was confirmed
     *
     * Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.
     *
     * When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.
     *
     * For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.
     *
    **/
    SDK.prototype.postAuthPoll = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostAuthPollRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/auth/poll";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.postAuthPoll200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postAuthStart - Start an authentication request
     *
     * If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.
     *
     * To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.
     *
     * Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.
     *
    **/
    SDK.prototype.postAuthStart = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostAuthStartRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/auth/start";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.postAuthStart200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
     *
     * This endpoint can be used by all users, even without premium
    **/
    SDK.prototype.postScrobbleEpisodes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostScrobbleEpisodesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/scrobble/episodes";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 207:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
     *
     * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
     *
     * This endpoint can be used by all users, even without premium.
     *
    **/
    SDK.prototype.postScrobbleShows = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostScrobbleShowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/scrobble/shows";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 207:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bulkResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postUserTags - Create a new tag
    **/
    SDK.prototype.postUserTags = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostUserTagsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/tags";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                        res.tag = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
     *
     * This endpoint can be used by all users, even without premium
    **/
    SDK.prototype.putScrobbleEpisodesEpisodeId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutScrobbleEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/scrobble/episodes/{episode_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.markedEpisode = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserEpisodesEpisodeId - Mark an episode
     *
     * Set `marked_at` to `NULL` or leave it out to use the current time.
    **/
    SDK.prototype.putUserEpisodesEpisodeId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.markedEpisode = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserFollowsNetworksNetworkId - Follow a network
    **/
    SDK.prototype.putUserFollowsNetworksNetworkId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserFollowsNetworksNetworkIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.networkFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserFollowsPeoplePersonId - Follow a person
    **/
    SDK.prototype.putUserFollowsPeoplePersonId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserFollowsPeoplePersonIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.personFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserFollowsShowsShowId - Follow a show
    **/
    SDK.prototype.putUserFollowsShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserFollowsShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.showFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserFollowsWebchannelsWebchannelId - Follow a webchannel
    **/
    SDK.prototype.putUserFollowsWebchannelsWebchannelId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserFollowsWebchannelsWebchannelIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.webchannelFollow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserTagsTagIdShowsShowId - Tag a show
    **/
    SDK.prototype.putUserTagsTagIdShowsShowId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserTagsTagIdShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows/{show_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.tagInstance = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserVotesEpisodesEpisodeId - Vote for an episode
    **/
    SDK.prototype.putUserVotesEpisodesEpisodeId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserVotesEpisodesEpisodeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.episodeVote = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putUserVotesShowsShowId - Vote for a show
     *
     * Set `voted_at` to `NULL` or leave it out to use the current time.
    **/
    SDK.prototype.putUserVotesShowsShowId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutUserVotesShowsShowIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.showVote = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
