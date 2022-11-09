import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://football-prediction-api.p.rapidapi.com",
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
  
  // GetApiV2ListFederations - Returns an array of all the available federations.
  GetApiV2ListFederations(
    req: operations.GetApiV2ListFederationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2ListFederationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2ListFederationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/list-federations";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2ListFederationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2ListFederations200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2ListFederations404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2ListMarkets - Returns an array of all the supported prediction markets
  GetApiV2ListMarkets(
    req: operations.GetApiV2ListMarketsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2ListMarketsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2ListMarketsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/list-markets";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2ListMarketsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2ListMarkets200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2ListMarkets404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2PerformanceStats - Returns predictions accuracy in the last 1, 7, 14, 30 days.
  GetApiV2PerformanceStats(
    req: operations.GetApiV2PerformanceStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2PerformanceStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2PerformanceStatsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/performance-stats";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2PerformanceStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2PerformanceStats200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2PerformanceStats404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2Predictions - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
  GetApiV2Predictions(
    req: operations.GetApiV2PredictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2PredictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2PredictionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/predictions";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2PredictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2Predictions404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2PredictionsId - Returns all predictions available for a match id.
  GetApiV2PredictionsId(
    req: operations.GetApiV2PredictionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2PredictionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2PredictionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/predictions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2PredictionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2PredictionsId200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApiV2PredictionsId404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
