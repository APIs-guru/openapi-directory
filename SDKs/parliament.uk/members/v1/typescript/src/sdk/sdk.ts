import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://parliament.uk",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * getApiLocationBrowseLocationTypeLocationName - Returns a list of locations, both parent and child
  **/
  getApiLocationBrowseLocationTypeLocationName(
    req: operations.GetApiLocationBrowseLocationTypeLocationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationBrowseLocationTypeLocationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationBrowseLocationTypeLocationNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Browse/{locationType}/{locationName}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationBrowseLocationTypeLocationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.locationItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.locationItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencySearch - Returns a list of constituencies
  **/
  getApiLocationConstituencySearch(
    req: operations.GetApiLocationConstituencySearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencySearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencySearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Location/Constituency/Search";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencySearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.constituencyMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.constituencyMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyId - Returns a constituency by ID
  **/
  getApiLocationConstituencyId(
    req: operations.GetApiLocationConstituencyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.constituencyItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.constituencyItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdElectionResultLatest - Returns latest election result by constituency id
  **/
  getApiLocationConstituencyIdElectionResultLatest(
    req: operations.GetApiLocationConstituencyIdElectionResultLatestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultLatestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultLatestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResult/Latest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdElectionResultLatestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdElectionResultElectionId - Returns an election result by constituency and election id
  **/
  getApiLocationConstituencyIdElectionResultElectionId(
    req: operations.GetApiLocationConstituencyIdElectionResultElectionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultElectionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultElectionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResult/{electionId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdElectionResultElectionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdElectionResults - Returns a list of election results by constituency ID
  **/
  getApiLocationConstituencyIdElectionResults(
    req: operations.GetApiLocationConstituencyIdElectionResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResults", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdElectionResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.electionResultListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.electionResultListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdGeometry - Returns geometry by constituency ID
  **/
  getApiLocationConstituencyIdGeometry(
    req: operations.GetApiLocationConstituencyIdGeometryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdGeometryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdGeometryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Geometry", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdGeometryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdRepresentations - Returns a list of representations by constituency ID
  **/
  getApiLocationConstituencyIdRepresentations(
    req: operations.GetApiLocationConstituencyIdRepresentationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdRepresentationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdRepresentationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Representations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdRepresentationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.constituencyRepresentationListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.constituencyRepresentationListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLocationConstituencyIdSynopsis - Returns a synopsis by constituency ID
  **/
  getApiLocationConstituencyIdSynopsis(
    req: operations.GetApiLocationConstituencyIdSynopsisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdSynopsisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdSynopsisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Synopsis", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLocationConstituencyIdSynopsisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLordsInterestsRegister - Returns a list of registered interests
  **/
  getApiLordsInterestsRegister(
    req: operations.GetApiLordsInterestsRegisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLordsInterestsRegisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLordsInterestsRegisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/LordsInterests/Register";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLordsInterestsRegisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.membersInterestsMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.membersInterestsMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiLordsInterestsStaff - Returns a list of staff
  **/
  getApiLordsInterestsStaff(
    req: operations.GetApiLordsInterestsStaffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLordsInterestsStaffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLordsInterestsStaffRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/LordsInterests/Staff";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiLordsInterestsStaffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.membersStaffMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.membersStaffMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersHistory - Return members by ID with list of their historical names, parties and memberships
  **/
  getApiMembersHistory(
    req: operations.GetApiMembersHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/History";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberHistoryItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberHistoryItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersSearch - Returns a list of current members of the Commons or Lords
  **/
  getApiMembersSearch(
    req: operations.GetApiMembersSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/Search";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersSearchHistorical - Returns a list of members of the Commons or Lords
  **/
  getApiMembersSearchHistorical(
    req: operations.GetApiMembersSearchHistoricalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersSearchHistoricalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersSearchHistoricalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/SearchHistorical";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersSearchHistoricalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersId - Return member by ID
  **/
  getApiMembersId(
    req: operations.GetApiMembersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdBiography - Return biography of member by ID
  **/
  getApiMembersIdBiography(
    req: operations.GetApiMembersIdBiographyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdBiographyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdBiographyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Biography", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdBiographyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberBiographyItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberBiographyItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdContact - Return list of contact details of member by ID
  **/
  getApiMembersIdContact(
    req: operations.GetApiMembersIdContactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdContactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdContactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Contact", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdContactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contactInformationListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.contactInformationListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdContributionSummary - Return contribution summary of member by ID
  **/
  getApiMembersIdContributionSummary(
    req: operations.GetApiMembersIdContributionSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdContributionSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdContributionSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/ContributionSummary", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdContributionSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.debateContributionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.debateContributionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdEdms - Return list of early day motions of member by ID
  **/
  getApiMembersIdEdms(
    req: operations.GetApiMembersIdEdmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdEdmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdEdmsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Edms", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdEdmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.earlyDayMotionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.earlyDayMotionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdExperience - Return experience of member by ID
  **/
  getApiMembersIdExperience(
    req: operations.GetApiMembersIdExperienceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdExperienceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdExperienceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Experience", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdExperienceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.biographyExperienceListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.biographyExperienceListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdFocus - Return list of areas of focus of member by ID
  **/
  getApiMembersIdFocus(
    req: operations.GetApiMembersIdFocusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdFocusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdFocusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Focus", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdFocusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberFocusListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberFocusListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdLatestElectionResult - Return latest election result of member by ID
  **/
  getApiMembersIdLatestElectionResult(
    req: operations.GetApiMembersIdLatestElectionResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdLatestElectionResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdLatestElectionResultRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/LatestElectionResult", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdLatestElectionResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdPortrait - Return portrait of member by ID
  **/
  getApiMembersIdPortrait(
    req: operations.GetApiMembersIdPortraitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdPortraitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdPortraitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Portrait", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdPortraitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdPortraitUrl - Return portrait url of member by ID
  **/
  getApiMembersIdPortraitUrl(
    req: operations.GetApiMembersIdPortraitUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdPortraitUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdPortraitUrlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/PortraitUrl", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdPortraitUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdRegisteredInterests - Return list of registered interests of member by ID
  **/
  getApiMembersIdRegisteredInterests(
    req: operations.GetApiMembersIdRegisteredInterestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdRegisteredInterestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdRegisteredInterestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/RegisteredInterests", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdRegisteredInterestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.registeredInterestCategoryListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.registeredInterestCategoryListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdStaff - Return list of staff of member by ID
  **/
  getApiMembersIdStaff(
    req: operations.GetApiMembersIdStaffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdStaffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdStaffRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Staff", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdStaffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.staffListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.staffListItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdSynopsis - Return synopsis of member by ID
  **/
  getApiMembersIdSynopsis(
    req: operations.GetApiMembersIdSynopsisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdSynopsisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdSynopsisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Synopsis", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdSynopsisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdThumbnail - Return thumbnail of member by ID
  **/
  getApiMembersIdThumbnail(
    req: operations.GetApiMembersIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdThumbnailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Thumbnail", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdThumbnailUrl - Return thumbnail url of member by ID
  **/
  getApiMembersIdThumbnailUrl(
    req: operations.GetApiMembersIdThumbnailUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdThumbnailUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdThumbnailUrlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/ThumbnailUrl", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdThumbnailUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdVoting - Return list of votes by member by ID
  **/
  getApiMembersIdVoting(
    req: operations.GetApiMembersIdVotingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdVotingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdVotingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Voting", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdVotingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.voteMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.voteMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiMembersIdWrittenQuestions - Return list of written questions by member by ID
  **/
  getApiMembersIdWrittenQuestions(
    req: operations.GetApiMembersIdWrittenQuestionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdWrittenQuestionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdWrittenQuestionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/WrittenQuestions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiMembersIdWrittenQuestionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.writtenQuestionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.writtenQuestionMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPartiesGetActiveHouse - Returns a list of current parties with at least one active member.
  **/
  getApiPartiesGetActiveHouse(
    req: operations.GetApiPartiesGetActiveHouseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesGetActiveHouseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesGetActiveHouseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/GetActive/{house}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPartiesGetActiveHouseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.partyMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.partyMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPartiesLordsByTypeForDate - Returns the composition of the House of Lords by peerage type.
  **/
  getApiPartiesLordsByTypeForDate(
    req: operations.GetApiPartiesLordsByTypeForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesLordsByTypeForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesLordsByTypeForDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/LordsByType/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPartiesLordsByTypeForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lordsByTypeMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.lordsByTypeMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPartiesStateOfThePartiesHouseForDate - Returns current state of parties
  **/
  getApiPartiesStateOfThePartiesHouseForDate(
    req: operations.GetApiPartiesStateOfThePartiesHouseForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesStateOfThePartiesHouseForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesStateOfThePartiesHouseForDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/StateOfTheParties/{house}/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPartiesStateOfThePartiesHouseForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.partySeatCountMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.partySeatCountMembersServiceSearchResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPostsDepartmentsType - Returns a list of departments.
  **/
  getApiPostsDepartmentsType(
    req: operations.GetApiPostsDepartmentsTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsDepartmentsTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsDepartmentsTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Posts/Departments/{type}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPostsDepartmentsTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPostsGovernmentPosts - Returns a list of government posts.
  **/
  getApiPostsGovernmentPosts(
    req: operations.GetApiPostsGovernmentPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsGovernmentPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsGovernmentPostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/GovernmentPosts";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPostsGovernmentPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPostsOppositionPosts - Returns a list of opposition posts.
  **/
  getApiPostsOppositionPosts(
    req: operations.GetApiPostsOppositionPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsOppositionPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsOppositionPostsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/OppositionPosts";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPostsOppositionPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPostsSpeakerAndDeputiesForDate - Returns a list containing the speaker and deputy speakers.
  **/
  getApiPostsSpeakerAndDeputiesForDate(
    req: operations.GetApiPostsSpeakerAndDeputiesForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsSpeakerAndDeputiesForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsSpeakerAndDeputiesForDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Posts/SpeakerAndDeputies/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPostsSpeakerAndDeputiesForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.memberItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.memberItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiPostsSpokespersons - Returns a list of spokespersons.
  **/
  getApiPostsSpokespersons(
    req: operations.GetApiPostsSpokespersonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsSpokespersonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsSpokespersonsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/Spokespersons";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiPostsSpokespersonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiReferenceAnsweringBodies - Returns a list of answering bodies.
  **/
  getApiReferenceAnsweringBodies(
    req: operations.GetApiReferenceAnsweringBodiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceAnsweringBodiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceAnsweringBodiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/AnsweringBodies";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiReferenceAnsweringBodiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.answeringBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.answeringBodies = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiReferenceDepartments - Returns a list of departments.
  **/
  getApiReferenceDepartments(
    req: operations.GetApiReferenceDepartmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceDepartmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceDepartmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/Departments";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiReferenceDepartmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiReferenceDepartmentsIdLogo - Returns department logo.
  **/
  getApiReferenceDepartmentsIdLogo(
    req: operations.GetApiReferenceDepartmentsIdLogoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceDepartmentsIdLogoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceDepartmentsIdLogoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Reference/Departments/{id}/Logo", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiReferenceDepartmentsIdLogoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiReferencePolicyInterests - Returns a list of policy interest.
  **/
  getApiReferencePolicyInterests(
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferencePolicyInterestsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/PolicyInterests";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiReferencePolicyInterestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericReferenceData = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.genericReferenceData = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
