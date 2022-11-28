import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ConsolidatedSafeScoring {
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
   * rootV1ScoringsConsolidated - /v1/Scorings/consolidated
   *
   * /v1/Scorings/consolidated
  **/
  rootV1ScoringsConsolidated(
    req: operations.RootV1ScoringsConsolidatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1ScoringsConsolidatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1ScoringsConsolidatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/consolidated";
    
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
        const res: operations.RootV1ScoringsConsolidatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * rootV1ScoringsConsolidatedDaily - /v1/Scorings/consolidated/daily
   *
   * /v1/Scorings/consolidated/daily
  **/
  rootV1ScoringsConsolidatedDaily(
    req: operations.RootV1ScoringsConsolidatedDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1ScoringsConsolidatedDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1ScoringsConsolidatedDailyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/consolidated/daily";
    
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
        const res: operations.RootV1ScoringsConsolidatedDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rootV1ScoringsConsolidatedDaily200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
