import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Two1UserStatisticsOptional {
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
   * userStatisticeDailyValueV1StatisticsIndividualDaily - User statistice - Daily value - v1/Statistics/individual/daily
   *
   * User statistice - Daily value - v1/Statistics/individual/daily
  **/
  userStatisticeDailyValueV1StatisticsIndividualDaily(
    req: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/individual/daily/";
    
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
        const res: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * userStatisticsAccumulatedValueV1StatisticsIndividual - User statistics - Accumulated value - /v1/Statistics/individual
   *
   * User statistics - Accumulated value - /v1/Statistics/individual
  **/
  userStatisticsAccumulatedValueV1StatisticsIndividual(
    req: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/individual/";
    
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
        const res: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
