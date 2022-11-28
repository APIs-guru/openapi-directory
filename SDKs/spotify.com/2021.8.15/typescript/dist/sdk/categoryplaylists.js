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
var CategoryPlaylists = /** @class */ (function () {
    function CategoryPlaylists(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * endpointAddTracksToPlaylist - Add Items to a Playlist
     *
     * Add one or more items to a user's playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointAddTracksToPlaylist = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointAddTracksToPlaylistRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/tracks", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.snapshotIdObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointChangePlaylistDetails - Change a Playlist's Details
     *
     * Change a playlist's name and public/private state. (The user must, of
     * course, own the playlist.)
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-change-playlist-details - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointChangePlaylistDetails = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointChangePlaylistDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointCreatePlaylist - Create a Playlist
     *
     * Create a playlist for a Spotify user. (The playlist will be empty until
     * you [add tracks](https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist).)
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-create-playlist - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointCreatePlaylist = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointCreatePlaylistRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{user_id}/playlists", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                        res.playlistObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.playlistObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointGetAListOfCurrentUsersPlaylists - Get a List of Current User's Playlists
     *
     * Get a list of the playlists owned or followed by the current Spotify
     * user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointGetAListOfCurrentUsersPlaylists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetAListOfCurrentUsersPlaylistsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/playlists";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.endpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointGetListUsersPlaylists - Get a List of a User's Playlists
     *
     * Get a list of the playlists owned or followed by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointGetListUsersPlaylists = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetListUsersPlaylistsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{user_id}/playlists", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.endpointGetListUsersPlaylists200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointGetPlaylist - Get a Playlist
     *
     * Get a playlist owned by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointGetPlaylist = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetPlaylistRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.playlistObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointGetPlaylistCover - Get a Playlist Cover Image
     *
     * Get the current image associated with a specific playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist-cover - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointGetPlaylistCover = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetPlaylistCoverRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/images", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.imageObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointGetPlaylistsTracks - Get a Playlist's Items
     *
     * Get full details of the items of a playlist owned by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointGetPlaylistsTracks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetPlaylistsTracksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/tracks", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.endpointGetPlaylistsTracks200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointRemoveTracksPlaylist - Remove Items from a Playlist
     *
     * Remove one or more items from a user's playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-playlist - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointRemoveTracksPlaylist = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointRemoveTracksPlaylistRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/tracks", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.snapshotIdObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointReorderOrReplacePlaylistsTracks - Reorder or Replace a Playlist's Items
     *
     * Either reorder or replace items in a playlist depending on the request's parameters.
     * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
     * To replace items, include `uris` as either a query parameter or in the request's body.
     * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
     *
     *
     * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
     * These operations can't be applied together in a single request.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointReorderOrReplacePlaylistsTracks = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointReorderOrReplacePlaylistsTracksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/tracks", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.snapshotIdObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.snapshotIdObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * endpointUploadCustomPlaylistCover - Upload a Custom Playlist Cover Image
     *
     * Replace the image used to represent a specific playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlaylists.prototype.endpointUploadCustomPlaylistCover = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointUploadCustomPlaylistCoverRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/playlists/{playlist_id}/images", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return CategoryPlaylists;
}());
export { CategoryPlaylists };
