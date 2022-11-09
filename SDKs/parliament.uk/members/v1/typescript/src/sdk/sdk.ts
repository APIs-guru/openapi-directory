import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetApiLocationBrowseLocationTypeLocationName - Returns a list of locations, both parent and child
  GetApiLocationBrowseLocationTypeLocationName(
    req: operations.GetApiLocationBrowseLocationTypeLocationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationBrowseLocationTypeLocationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationBrowseLocationTypeLocationNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Browse/{locationType}/{locationName}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationBrowseLocationTypeLocationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.locationItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.locationItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencySearch - Returns a list of constituencies
  GetApiLocationConstituencySearch(
    req: operations.GetApiLocationConstituencySearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencySearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencySearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Location/Constituency/Search";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencySearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.constituencyMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.constituencyMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyId - Returns a constituency by ID
  GetApiLocationConstituencyId(
    req: operations.GetApiLocationConstituencyIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.constituencyItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.constituencyItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdElectionResultLatest - Returns latest election result by constituency id
  GetApiLocationConstituencyIdElectionResultLatest(
    req: operations.GetApiLocationConstituencyIdElectionResultLatestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultLatestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultLatestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResult/Latest", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdElectionResultLatestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdElectionResultElectionId - Returns an election result by constituency and election id
  GetApiLocationConstituencyIdElectionResultElectionId(
    req: operations.GetApiLocationConstituencyIdElectionResultElectionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultElectionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultElectionIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResult/{electionId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdElectionResultElectionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdElectionResults - Returns a list of election results by constituency ID
  GetApiLocationConstituencyIdElectionResults(
    req: operations.GetApiLocationConstituencyIdElectionResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdElectionResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdElectionResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/ElectionResults", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdElectionResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionResultListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.electionResultListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdGeometry - Returns geometry by constituency ID
  GetApiLocationConstituencyIdGeometry(
    req: operations.GetApiLocationConstituencyIdGeometryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdGeometryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdGeometryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Geometry", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdGeometryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdRepresentations - Returns a list of representations by constituency ID
  GetApiLocationConstituencyIdRepresentations(
    req: operations.GetApiLocationConstituencyIdRepresentationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdRepresentationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdRepresentationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Representations", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdRepresentationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.constituencyRepresentationListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.constituencyRepresentationListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLocationConstituencyIdSynopsis - Returns a synopsis by constituency ID
  GetApiLocationConstituencyIdSynopsis(
    req: operations.GetApiLocationConstituencyIdSynopsisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLocationConstituencyIdSynopsisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLocationConstituencyIdSynopsisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Location/Constituency/{id}/Synopsis", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLocationConstituencyIdSynopsisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLordsInterestsRegister - Returns a list of registered interests
  GetApiLordsInterestsRegister(
    req: operations.GetApiLordsInterestsRegisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLordsInterestsRegisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLordsInterestsRegisterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/LordsInterests/Register";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLordsInterestsRegisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.membersInterestsMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.membersInterestsMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiLordsInterestsStaff - Returns a list of staff
  GetApiLordsInterestsStaff(
    req: operations.GetApiLordsInterestsStaffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiLordsInterestsStaffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiLordsInterestsStaffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/LordsInterests/Staff";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiLordsInterestsStaffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.membersStaffMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.membersStaffMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersHistory - Return members by ID with list of their historical names, parties and memberships
  GetApiMembersHistory(
    req: operations.GetApiMembersHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/History";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberHistoryItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberHistoryItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersSearch - Returns a list of current members of the Commons or Lords
  GetApiMembersSearch(
    req: operations.GetApiMembersSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/Search";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersSearchHistorical - Returns a list of members of the Commons or Lords
  GetApiMembersSearchHistorical(
    req: operations.GetApiMembersSearchHistoricalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersSearchHistoricalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersSearchHistoricalRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Members/SearchHistorical";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersSearchHistoricalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersId - Return member by ID
  GetApiMembersId(
    req: operations.GetApiMembersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdBiography - Return biography of member by ID
  GetApiMembersIdBiography(
    req: operations.GetApiMembersIdBiographyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdBiographyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdBiographyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Biography", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdBiographyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberBiographyItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberBiographyItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdContact - Return list of contact details of member by ID
  GetApiMembersIdContact(
    req: operations.GetApiMembersIdContactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdContactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdContactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Contact", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdContactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contactInformationListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contactInformationListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdContributionSummary - Return contribution summary of member by ID
  GetApiMembersIdContributionSummary(
    req: operations.GetApiMembersIdContributionSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdContributionSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdContributionSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/ContributionSummary", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdContributionSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.debateContributionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.debateContributionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdEdms - Return list of early day motions of member by ID
  GetApiMembersIdEdms(
    req: operations.GetApiMembersIdEdmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdEdmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdEdmsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Edms", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdEdmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.earlyDayMotionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.earlyDayMotionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdExperience - Return experience of member by ID
  GetApiMembersIdExperience(
    req: operations.GetApiMembersIdExperienceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdExperienceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdExperienceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Experience", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdExperienceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.biographyExperienceListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.biographyExperienceListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdFocus - Return list of areas of focus of member by ID
  GetApiMembersIdFocus(
    req: operations.GetApiMembersIdFocusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdFocusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdFocusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Focus", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdFocusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberFocusListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberFocusListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdLatestElectionResult - Return latest election result of member by ID
  GetApiMembersIdLatestElectionResult(
    req: operations.GetApiMembersIdLatestElectionResultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdLatestElectionResultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdLatestElectionResultRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/LatestElectionResult", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdLatestElectionResultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.electionResultItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdPortrait - Return portrait of member by ID
  GetApiMembersIdPortrait(
    req: operations.GetApiMembersIdPortraitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdPortraitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdPortraitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Portrait", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdPortraitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 204:
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdPortraitUrl - Return portrait url of member by ID
  GetApiMembersIdPortraitUrl(
    req: operations.GetApiMembersIdPortraitUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdPortraitUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdPortraitUrlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/PortraitUrl", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdPortraitUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdRegisteredInterests - Return list of registered interests of member by ID
  GetApiMembersIdRegisteredInterests(
    req: operations.GetApiMembersIdRegisteredInterestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdRegisteredInterestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdRegisteredInterestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/RegisteredInterests", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdRegisteredInterestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.registeredInterestCategoryListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.registeredInterestCategoryListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdStaff - Return list of staff of member by ID
  GetApiMembersIdStaff(
    req: operations.GetApiMembersIdStaffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdStaffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdStaffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Staff", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdStaffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.staffListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.staffListItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdSynopsis - Return synopsis of member by ID
  GetApiMembersIdSynopsis(
    req: operations.GetApiMembersIdSynopsisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdSynopsisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdSynopsisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Synopsis", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdSynopsisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdThumbnail - Return thumbnail of member by ID
  GetApiMembersIdThumbnail(
    req: operations.GetApiMembersIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdThumbnailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Thumbnail", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdThumbnailUrl - Return thumbnail url of member by ID
  GetApiMembersIdThumbnailUrl(
    req: operations.GetApiMembersIdThumbnailUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdThumbnailUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdThumbnailUrlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/ThumbnailUrl", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdThumbnailUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.stringItem = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdVoting - Return list of votes by member by ID
  GetApiMembersIdVoting(
    req: operations.GetApiMembersIdVotingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdVotingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdVotingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/Voting", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdVotingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.voteMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.voteMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiMembersIdWrittenQuestions - Return list of written questions by member by ID
  GetApiMembersIdWrittenQuestions(
    req: operations.GetApiMembersIdWrittenQuestionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiMembersIdWrittenQuestionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiMembersIdWrittenQuestionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Members/{id}/WrittenQuestions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiMembersIdWrittenQuestionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.writtenQuestionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.writtenQuestionMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPartiesGetActiveHouse - Returns a list of current parties with at least one active member.
  GetApiPartiesGetActiveHouse(
    req: operations.GetApiPartiesGetActiveHouseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesGetActiveHouseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesGetActiveHouseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/GetActive/{house}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPartiesGetActiveHouseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.partyMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.partyMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPartiesLordsByTypeForDate - Returns the composition of the House of Lords by peerage type.
  GetApiPartiesLordsByTypeForDate(
    req: operations.GetApiPartiesLordsByTypeForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesLordsByTypeForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesLordsByTypeForDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/LordsByType/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPartiesLordsByTypeForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lordsByTypeMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.lordsByTypeMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPartiesStateOfThePartiesHouseForDate - Returns current state of parties
  GetApiPartiesStateOfThePartiesHouseForDate(
    req: operations.GetApiPartiesStateOfThePartiesHouseForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPartiesStateOfThePartiesHouseForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPartiesStateOfThePartiesHouseForDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Parties/StateOfTheParties/{house}/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPartiesStateOfThePartiesHouseForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.partySeatCountMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.partySeatCountMembersServiceSearchResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPostsDepartmentsType - Returns a list of departments.
  GetApiPostsDepartmentsType(
    req: operations.GetApiPostsDepartmentsTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsDepartmentsTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsDepartmentsTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Posts/Departments/{type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPostsDepartmentsTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPostsGovernmentPosts - Returns a list of government posts.
  GetApiPostsGovernmentPosts(
    req: operations.GetApiPostsGovernmentPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsGovernmentPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsGovernmentPostsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/GovernmentPosts";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPostsGovernmentPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPostsOppositionPosts - Returns a list of opposition posts.
  GetApiPostsOppositionPosts(
    req: operations.GetApiPostsOppositionPostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsOppositionPostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsOppositionPostsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/OppositionPosts";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPostsOppositionPostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPostsSpeakerAndDeputiesForDate - Returns a list containing the speaker and deputy speakers.
  GetApiPostsSpeakerAndDeputiesForDate(
    req: operations.GetApiPostsSpeakerAndDeputiesForDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsSpeakerAndDeputiesForDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsSpeakerAndDeputiesForDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Posts/SpeakerAndDeputies/{forDate}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPostsSpeakerAndDeputiesForDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.memberItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.memberItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiPostsSpokespersons - Returns a list of spokespersons.
  GetApiPostsSpokespersons(
    req: operations.GetApiPostsSpokespersonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiPostsSpokespersonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiPostsSpokespersonsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Posts/Spokespersons";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiPostsSpokespersonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.governmentOppositionPostItems = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiReferenceAnsweringBodies - Returns a list of answering bodies.
  GetApiReferenceAnsweringBodies(
    req: operations.GetApiReferenceAnsweringBodiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceAnsweringBodiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceAnsweringBodiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/AnsweringBodies";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiReferenceAnsweringBodiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.answeringBodies = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.answeringBodies = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiReferenceDepartments - Returns a list of departments.
  GetApiReferenceDepartments(
    req: operations.GetApiReferenceDepartmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceDepartmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceDepartmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/Departments";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiReferenceDepartmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.governmentDepartments = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiReferenceDepartmentsIdLogo - Returns department logo.
  GetApiReferenceDepartmentsIdLogo(
    req: operations.GetApiReferenceDepartmentsIdLogoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferenceDepartmentsIdLogoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiReferenceDepartmentsIdLogoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/Reference/Departments/{id}/Logo", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiReferenceDepartmentsIdLogoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiReferencePolicyInterests - Returns a list of policy interest.
  GetApiReferencePolicyInterests(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiReferencePolicyInterestsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/Reference/PolicyInterests";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiReferencePolicyInterestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericReferenceData = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.genericReferenceData = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/plain`)) {
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
