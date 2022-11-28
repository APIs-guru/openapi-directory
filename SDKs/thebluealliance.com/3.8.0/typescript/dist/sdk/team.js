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
var Team = /** @class */ (function () {
    function Team(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getDistrictRankings - Gets a list of team district rankings for the given district.
    **/
    Team.prototype.getDistrictRankings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDistrictRankingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/district/{district_key}/rankings", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.districtRankings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDistrictTeams - Gets a list of `Team` objects that competed in events in the given district.
    **/
    Team.prototype.getDistrictTeams = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDistrictTeamsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/district/{district_key}/teams", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teams = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDistrictTeamsKeys - Gets a list of `Team` objects that competed in events in the given district.
    **/
    Team.prototype.getDistrictTeamsKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDistrictTeamsKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/district/{district_key}/teams/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getDistrictTeamsKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDistrictTeamsSimple - Gets a short-form list of `Team` objects that competed in events in the given district.
    **/
    Team.prototype.getDistrictTeamsSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDistrictTeamsSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/district/{district_key}/teams/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEventTeams - Gets a list of `Team` objects that competed in the given event.
    **/
    Team.prototype.getEventTeams = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEventTeamsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/event/{event_key}/teams", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teams = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEventTeamsKeys - Gets a list of `Team` keys that competed in the given event.
    **/
    Team.prototype.getEventTeamsKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEventTeamsKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/event/{event_key}/teams/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getEventTeamsKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEventTeamsSimple - Gets a short-form list of `Team` objects that competed in the given event.
    **/
    Team.prototype.getEventTeamsSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEventTeamsSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/event/{event_key}/teams/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEventTeamsStatuses - Gets a key-value list of the event statuses for teams competing at the given event.
    **/
    Team.prototype.getEventTeamsStatuses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEventTeamsStatusesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/event/{event_key}/teams/statuses", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getEventTeamsStatuses200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeam - Gets a `Team` object for the team referenced by the given key.
    **/
    Team.prototype.getTeam = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.team = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamAwards - Gets a list of awards the given team has won.
    **/
    Team.prototype.getTeamAwards = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamAwardsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/awards", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.awards = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamAwardsByYear - Gets a list of awards the given team has won in a given year.
    **/
    Team.prototype.getTeamAwardsByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamAwardsByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/awards/{year}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.awards = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamDistricts - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
    **/
    Team.prototype.getTeamDistricts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamDistrictsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/districts", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.districtLists = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventAwards - Gets a list of awards the given team won at the given event.
    **/
    Team.prototype.getTeamEventAwards = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventAwardsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/awards", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.awards = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventMatches - Gets a list of matches for the given team and event.
    **/
    Team.prototype.getTeamEventMatches = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventMatchesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.matches = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventMatchesKeys - Gets a list of match keys for matches for the given team and event.
    **/
    Team.prototype.getTeamEventMatchesKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventMatchesKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamEventMatchesKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventMatchesSimple - Gets a short-form list of matches for the given team and event.
    **/
    Team.prototype.getTeamEventMatchesSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventMatchesSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.matches = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventStatus - Gets the competition rank and status of the team at the given event.
    **/
    Team.prototype.getTeamEventStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/status", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamEventStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEvents - Gets a list of all events this team has competed at.
    **/
    Team.prototype.getTeamEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.events = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsByYear - Gets a list of events this team has competed at in the given year.
    **/
    Team.prototype.getTeamEventsByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.events = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsByYearKeys - Gets a list of the event keys for events this team has competed at in the given year.
    **/
    Team.prototype.getTeamEventsByYearKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsByYearKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamEventsByYearKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsByYearSimple - Gets a short-form list of events this team has competed at in the given year.
    **/
    Team.prototype.getTeamEventsByYearSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsByYearSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.eventSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsKeys - Gets a list of the event keys for all events this team has competed at.
    **/
    Team.prototype.getTeamEventsKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamEventsKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsSimple - Gets a short-form list of all events this team has competed at.
    **/
    Team.prototype.getTeamEventsSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.eventSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamEventsStatusesByYear - Gets a key-value list of the event statuses for events this team has competed at in the given year.
    **/
    Team.prototype.getTeamEventsStatusesByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamEventsStatusesByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/statuses", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamEventsStatusesByYear200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMatchesByYear - Gets a list of matches for the given team and year.
    **/
    Team.prototype.getTeamMatchesByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMatchesByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.matches = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMatchesByYearKeys - Gets a list of match keys for matches for the given team and year.
    **/
    Team.prototype.getTeamMatchesByYearKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMatchesByYearKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamMatchesByYearKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMatchesByYearSimple - Gets a short-form list of matches for the given team and year.
    **/
    Team.prototype.getTeamMatchesByYearSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMatchesByYearSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.matchSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMediaByTag - Gets a list of Media (videos / pictures) for the given team and tag.
    **/
    Team.prototype.getTeamMediaByTag = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMediaByTagRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/media/tag/{media_tag}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.media = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMediaByTagYear - Gets a list of Media (videos / pictures) for the given team, tag and year.
    **/
    Team.prototype.getTeamMediaByTagYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMediaByTagYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/media/tag/{media_tag}/{year}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.media = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamMediaByYear - Gets a list of Media (videos / pictures) for the given team and year.
    **/
    Team.prototype.getTeamMediaByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamMediaByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/media/{year}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.media = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamRobots - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
    **/
    Team.prototype.getTeamRobots = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamRobotsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/robots", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamRobots = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamSimple - Gets a `Team_Simple` object for the team referenced by the given key.
    **/
    Team.prototype.getTeamSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamSimple = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamSocialMedia - Gets a list of Media (social media) for the given team.
    **/
    Team.prototype.getTeamSocialMedia = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamSocialMediaRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/social_media", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.media = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamYearsParticipated - Gets a list of years in which the team participated in at least one competition.
    **/
    Team.prototype.getTeamYearsParticipated = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamYearsParticipatedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/team/{team_key}/years_participated", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamYearsParticipated200ApplicationJsonIntegers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeams - Gets a list of `Team` objects, paginated in groups of 500.
    **/
    Team.prototype.getTeams = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{page_num}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teams = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamsByYear - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
    **/
    Team.prototype.getTeamsByYear = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsByYearRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teams = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamsByYearKeys - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
    **/
    Team.prototype.getTeamsByYearKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsByYearKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamsByYearKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamsByYearSimple - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
    **/
    Team.prototype.getTeamsByYearSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsByYearSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamsKeys - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
    **/
    Team.prototype.getTeamsKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{page_num}/keys", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTeamsKeys200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTeamsSimple - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
    **/
    Team.prototype.getTeamsSimple = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTeamsSimpleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{page_num}/simple", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.teamSimples = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Team;
}());
export { Team };
