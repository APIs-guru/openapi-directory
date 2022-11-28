import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class District {
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
   * getDistrictsByYear - Gets a list of districts and their corresponding district key, for the given year.
  **/
  getDistrictsByYear(
    req: operations.GetDistrictsByYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDistrictsByYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDistrictsByYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/districts/{year}", req.pathParams);
    
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
        const res: operations.GetDistrictsByYearResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * getEventDistrictPoints - Gets a list of team rankings for the Event.
  **/
  getEventDistrictPoints(
    req: operations.GetEventDistrictPointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventDistrictPointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventDistrictPointsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/event/{event_key}/district_points", req.pathParams);
    
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
        const res: operations.GetEventDistrictPointsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventDistrictPoints = httpRes?.data;
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

}
