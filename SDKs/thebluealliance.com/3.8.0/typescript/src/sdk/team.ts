import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Team {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
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
  getDistrictRankings(
    req: operations.GetDistrictRankingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictRankingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictRankingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/rankings", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDistrictRankingsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.districtRankings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDistrictTeams - Gets a list of `Team` objects that competed in events in the given district.
  **/
  getDistrictTeams(
    req: operations.GetDistrictTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/teams", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDistrictTeamsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDistrictTeamsKeys - Gets a list of `Team` objects that competed in events in the given district.
  **/
  getDistrictTeamsKeys(
    req: operations.GetDistrictTeamsKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictTeamsKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictTeamsKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/teams/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDistrictTeamsKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDistrictTeamsKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDistrictTeamsSimple - Gets a short-form list of `Team` objects that competed in events in the given district.
  **/
  getDistrictTeamsSimple(
    req: operations.GetDistrictTeamsSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictTeamsSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictTeamsSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/teams/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDistrictTeamsSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEventTeams - Gets a list of `Team` objects that competed in the given event.
  **/
  getEventTeams(
    req: operations.GetEventTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/event/{event_key}/teams", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventTeamsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEventTeamsKeys - Gets a list of `Team` keys that competed in the given event.
  **/
  getEventTeamsKeys(
    req: operations.GetEventTeamsKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTeamsKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTeamsKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/event/{event_key}/teams/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventTeamsKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEventTeamsKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEventTeamsSimple - Gets a short-form list of `Team` objects that competed in the given event.
  **/
  getEventTeamsSimple(
    req: operations.GetEventTeamsSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTeamsSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTeamsSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/event/{event_key}/teams/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventTeamsSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEventTeamsStatuses - Gets a key-value list of the event statuses for teams competing at the given event.
  **/
  getEventTeamsStatuses(
    req: operations.GetEventTeamsStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventTeamsStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventTeamsStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/event/{event_key}/teams/statuses", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventTeamsStatusesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEventTeamsStatuses200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeam - Gets a `Team` object for the team referenced by the given key.
  **/
  getTeam(
    req: operations.GetTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.team = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamAwards - Gets a list of awards the given team has won.
  **/
  getTeamAwards(
    req: operations.GetTeamAwardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamAwardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamAwardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/awards", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamAwardsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.awards = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamAwardsByYear - Gets a list of awards the given team has won in a given year.
  **/
  getTeamAwardsByYear(
    req: operations.GetTeamAwardsByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamAwardsByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamAwardsByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/awards/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamAwardsByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.awards = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamDistricts - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
  **/
  getTeamDistricts(
    req: operations.GetTeamDistrictsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamDistrictsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamDistrictsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/districts", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamDistrictsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.districtLists = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventAwards - Gets a list of awards the given team won at the given event.
  **/
  getTeamEventAwards(
    req: operations.GetTeamEventAwardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventAwardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventAwardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/awards", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventAwardsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.awards = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventMatches - Gets a list of matches for the given team and event.
  **/
  getTeamEventMatches(
    req: operations.GetTeamEventMatchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventMatchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventMatchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventMatchesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matches = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventMatchesKeys - Gets a list of match keys for matches for the given team and event.
  **/
  getTeamEventMatchesKeys(
    req: operations.GetTeamEventMatchesKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventMatchesKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventMatchesKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventMatchesKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamEventMatchesKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventMatchesSimple - Gets a short-form list of matches for the given team and event.
  **/
  getTeamEventMatchesSimple(
    req: operations.GetTeamEventMatchesSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventMatchesSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventMatchesSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/matches/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventMatchesSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matches = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventStatus - Gets the competition rank and status of the team at the given event.
  **/
  getTeamEventStatus(
    req: operations.GetTeamEventStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/event/{event_key}/status", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamEventStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEvents - Gets a list of all events this team has competed at.
  **/
  getTeamEvents(
    req: operations.GetTeamEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsByYear - Gets a list of events this team has competed at in the given year.
  **/
  getTeamEventsByYear(
    req: operations.GetTeamEventsByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsByYearKeys - Gets a list of the event keys for events this team has competed at in the given year.
  **/
  getTeamEventsByYearKeys(
    req: operations.GetTeamEventsByYearKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsByYearKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsByYearKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsByYearKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamEventsByYearKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsByYearSimple - Gets a short-form list of events this team has competed at in the given year.
  **/
  getTeamEventsByYearSimple(
    req: operations.GetTeamEventsByYearSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsByYearSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsByYearSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsByYearSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsKeys - Gets a list of the event keys for all events this team has competed at.
  **/
  getTeamEventsKeys(
    req: operations.GetTeamEventsKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamEventsKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsSimple - Gets a short-form list of all events this team has competed at.
  **/
  getTeamEventsSimple(
    req: operations.GetTeamEventsSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamEventsStatusesByYear - Gets a key-value list of the event statuses for events this team has competed at in the given year.
  **/
  getTeamEventsStatusesByYear(
    req: operations.GetTeamEventsStatusesByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamEventsStatusesByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamEventsStatusesByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/events/{year}/statuses", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamEventsStatusesByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamEventsStatusesByYear200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMatchesByYear - Gets a list of matches for the given team and year.
  **/
  getTeamMatchesByYear(
    req: operations.GetTeamMatchesByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMatchesByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMatchesByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMatchesByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matches = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMatchesByYearKeys - Gets a list of match keys for matches for the given team and year.
  **/
  getTeamMatchesByYearKeys(
    req: operations.GetTeamMatchesByYearKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMatchesByYearKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMatchesByYearKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMatchesByYearKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamMatchesByYearKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMatchesByYearSimple - Gets a short-form list of matches for the given team and year.
  **/
  getTeamMatchesByYearSimple(
    req: operations.GetTeamMatchesByYearSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMatchesByYearSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMatchesByYearSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/matches/{year}/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMatchesByYearSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.matchSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMediaByTag - Gets a list of Media (videos / pictures) for the given team and tag.
  **/
  getTeamMediaByTag(
    req: operations.GetTeamMediaByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMediaByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMediaByTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/media/tag/{media_tag}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMediaByTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.media = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMediaByTagYear - Gets a list of Media (videos / pictures) for the given team, tag and year.
  **/
  getTeamMediaByTagYear(
    req: operations.GetTeamMediaByTagYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMediaByTagYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMediaByTagYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/media/tag/{media_tag}/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMediaByTagYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.media = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamMediaByYear - Gets a list of Media (videos / pictures) for the given team and year.
  **/
  getTeamMediaByYear(
    req: operations.GetTeamMediaByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamMediaByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamMediaByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/media/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamMediaByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.media = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamRobots - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
  **/
  getTeamRobots(
    req: operations.GetTeamRobotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamRobotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamRobotsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/robots", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamRobotsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamRobots = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamSimple - Gets a `Team_Simple` object for the team referenced by the given key.
  **/
  getTeamSimple(
    req: operations.GetTeamSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSimple = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamSocialMedia - Gets a list of Media (social media) for the given team.
  **/
  getTeamSocialMedia(
    req: operations.GetTeamSocialMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamSocialMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamSocialMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/social_media", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamSocialMediaResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.media = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamYearsParticipated - Gets a list of years in which the team participated in at least one competition.
  **/
  getTeamYearsParticipated(
    req: operations.GetTeamYearsParticipatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamYearsParticipatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamYearsParticipatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/team/{team_key}/years_participated", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamYearsParticipatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamYearsParticipated200ApplicationJsonIntegers = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeams - Gets a list of `Team` objects, paginated in groups of 500.
  **/
  getTeams(
    req: operations.GetTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{page_num}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamsByYear - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
  **/
  getTeamsByYear(
    req: operations.GetTeamsByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamsByYearKeys - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
  **/
  getTeamsByYearKeys(
    req: operations.GetTeamsByYearKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsByYearKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsByYearKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsByYearKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamsByYearKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamsByYearSimple - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
  **/
  getTeamsByYearSimple(
    req: operations.GetTeamsByYearSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsByYearSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsByYearSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{year}/{page_num}/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsByYearSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamsKeys - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
  **/
  getTeamsKeys(
    req: operations.GetTeamsKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{page_num}/keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTeamsKeys200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTeamsSimple - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
  **/
  getTeamsSimple(
    req: operations.GetTeamsSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{page_num}/simple", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
