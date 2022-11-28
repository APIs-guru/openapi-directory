import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class List {
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
   * getDistrictEvents - Gets a list of events in the given district.
  **/
  getDistrictEvents(
    req: operations.GetDistrictEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/events", req.pathParams);
    
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
        const res: operations.GetDistrictEventsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * getDistrictEventsKeys - Gets a list of event keys for events in the given district.
  **/
  getDistrictEventsKeys(
    req: operations.GetDistrictEventsKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictEventsKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictEventsKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/events/keys", req.pathParams);
    
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
        const res: operations.GetDistrictEventsKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDistrictEventsKeys200ApplicationJsonStrings = httpRes?.data;
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
   * getDistrictEventsSimple - Gets a short-form list of events in the given district.
  **/
  getDistrictEventsSimple(
    req: operations.GetDistrictEventsSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictEventsSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictEventsSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/district/{district_key}/events/simple", req.pathParams);
    
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
        const res: operations.GetDistrictEventsSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * getEventsByYear - Gets a list of events in the given year.
  **/
  getEventsByYear(
    req: operations.GetEventsByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/events/{year}", req.pathParams);
    
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
        const res: operations.GetEventsByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * getEventsByYearKeys - Gets a list of event keys in the given year.
  **/
  getEventsByYearKeys(
    req: operations.GetEventsByYearKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsByYearKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsByYearKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/events/{year}/keys", req.pathParams);
    
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
        const res: operations.GetEventsByYearKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEventsByYearKeys200ApplicationJsonStrings = httpRes?.data;
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
   * getEventsByYearSimple - Gets a short-form list of events in the given year.
  **/
  getEventsByYearSimple(
    req: operations.GetEventsByYearSimpleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsByYearSimpleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsByYearSimpleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/events/{year}/simple", req.pathParams);
    
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
        const res: operations.GetEventsByYearSimpleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
