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
var CategoryPlayer = /** @class */ (function () {
    function CategoryPlayer(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * endpointAddToQueue - Add an item to queue
     *
     * Add an item to the end of the user's current playback queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-to-queue - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointAddToQueue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointAddToQueueRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/queue";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointGetAUsersAvailableDevices - Get a User's Available Devices
     *
     * Get information about a user's available devices.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointGetAUsersAvailableDevices = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetAUsersAvailableDevicesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/devices";
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
                        res.devicesObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * endpointGetInformationAboutTheUsersCurrentPlayback - Get Information About The User's Current Playback
     *
     * Get information about the user's current playback state, including track or episode, progress, and active device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointGetInformationAboutTheUsersCurrentPlayback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player";
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
                        res.currentlyPlayingContextObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointGetRecentlyPlayed - Get Current User's Recently Played Tracks
     *
     * Get tracks from the current user's recently played tracks.
     * *Note: Currently doesn't support podcast episodes.*
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointGetRecentlyPlayed = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetRecentlyPlayedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/recently-played";
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
                        res.endpointGetRecentlyPlayed200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointGetTheUsersCurrentlyPlayingTrack - Get the User's Currently Playing Track
     *
     * Get the object currently being played on the user's Spotify account.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointGetTheUsersCurrentlyPlayingTrack = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/currently-playing";
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
                        res.currentlyPlayingObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointPauseAUsersPlayback - Pause a User's Playback
     *
     * Pause playback on the user's account.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointPauseAUsersPlayback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointPauseAUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/pause";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointSeekToPositionInCurrentlyPlayingTrack - Seek To Position In Currently Playing Track
     *
     * Seeks to the given position in the user's currently playing track.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointSeekToPositionInCurrentlyPlayingTrack = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/seek";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointSetRepeatModeOnUsersPlayback - Set Repeat Mode On User’s Playback
     *
     * Set the repeat mode for the user's playback. Options are repeat-track,
     * repeat-context, and off.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointSetRepeatModeOnUsersPlayback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointSetRepeatModeOnUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/repeat";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointSetVolumeForUsersPlayback - Set Volume For User's Playback
     *
     * Set the volume for the user's current playback device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointSetVolumeForUsersPlayback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointSetVolumeForUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/volume";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointSkipUsersPlaybackToNextTrack - Skip User’s Playback To Next Track
     *
     * Skips to next track in the user's queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointSkipUsersPlaybackToNextTrack = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointSkipUsersPlaybackToNextTrackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/next";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointSkipUsersPlaybackToPreviousTrack - Skip User’s Playback To Previous Track
     *
     * Skips to previous track in the user's queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointSkipUsersPlaybackToPreviousTrack = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointSkipUsersPlaybackToPreviousTrackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/previous";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointStartAUsersPlayback - Start/Resume a User's Playback
     *
     * Start a new context or resume current playback on the user's active device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointStartAUsersPlayback = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointStartAUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/play";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointToggleShuffleForUsersPlayback - Toggle Shuffle For User’s Playback
     *
     * Toggle shuffle on or off for user's playback.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointToggleShuffleForUsersPlayback = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointToggleShuffleForUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player/shuffle";
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
     * endpointTransferAUsersPlayback - Transfer a User's Playback
     *
     * Transfer playback to a new device and determine if it should start playing.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    CategoryPlayer.prototype.endpointTransferAUsersPlayback = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointTransferAUsersPlaybackRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/me/player";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
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
    return CategoryPlayer;
}());
export { CategoryPlayer };
