import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.telematicssdk.com",
  "https://mobilesdk.telematicssdk.com",
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
  
  // RootV1ScoringsConsolidated - /v1/Scorings/consolidated
  /** 
   * /v1/Scorings/consolidated
  **/
  RootV1ScoringsConsolidated(
    req: operations.RootV1ScoringsConsolidatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1ScoringsConsolidatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1ScoringsConsolidatedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/consolidated";
    
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
        let res: operations.RootV1ScoringsConsolidatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RootV1ScoringsConsolidatedDaily - /v1/Scorings/consolidated/daily
  /** 
   * /v1/Scorings/consolidated/daily
  **/
  RootV1ScoringsConsolidatedDaily(
    req: operations.RootV1ScoringsConsolidatedDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1ScoringsConsolidatedDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1ScoringsConsolidatedDailyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/consolidated/daily";
    
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
        let res: operations.RootV1ScoringsConsolidatedDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rootV1ScoringsConsolidatedDaily200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RootV1StatisticsConsolidated - /v1/Statistics/consolidated
  /** 
   * /v1/Statistics/consolidated
  **/
  RootV1StatisticsConsolidated(
    req: operations.RootV1StatisticsConsolidatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1StatisticsConsolidatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1StatisticsConsolidatedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/consolidated";
    
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
        let res: operations.RootV1StatisticsConsolidatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RootV1StatisticsConsolidatedDaily - /v1/Statistics/consolidated/daily
  /** 
   * /v1/Statistics/consolidated/daily
  **/
  RootV1StatisticsConsolidatedDaily(
    req: operations.RootV1StatisticsConsolidatedDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RootV1StatisticsConsolidatedDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RootV1StatisticsConsolidatedDailyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/consolidated/daily";
    
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
        let res: operations.RootV1StatisticsConsolidatedDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TripsTripDetails - Trips - trip details
  /** 
   * Trips - trip details
  **/
  TripsTripDetails(
    req: operations.TripsTripDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TripsTripDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TripsTripDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mobilesdk/stage/track/get_track/v1";
    
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
        let res: operations.TripsTripDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tripsTripDetails200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserSafeScoringAccumulatedValueV1ScoringsIndividual - User safe scoring - Accumulated value - v1/Scorings/individual
  /** 
   * Safe driving score API. This API is a part of Telematics API that we provide to our clients.
   * 
   * Rating description presents the universal approach, developed by our company on the basis of many years of experience; most of the input variables presented in this document could be adopted depending on the needs of the company and the focus on the specific characteristics of clients' driving style.
   * Since 2019 we have moved to the 3rd Generation of the scoring model which allows distinguishing a context of events and add penalty points in accordance with a level of risk generated by an event
   * 
   * [More details](https://docs.telematicssdk.com)
  **/
  UserSafeScoringAccumulatedValueV1ScoringsIndividual(
    req: operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/individual/";
    
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
        let res: operations.UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserSafeScoringDailyValueV1ScoringsIndividualDaily - User safe scoring - daily value - /v1/Scorings/individual/daily
  /** 
   * User safe scoring - daily value - /v1/Scorings/individual/daily
  **/
  UserSafeScoringDailyValueV1ScoringsIndividualDaily(
    req: operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Scorings/individual/daily";
    
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
        let res: operations.UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserStatisticeDailyValueV1StatisticsIndividualDaily - User statistice - Daily value - v1/Statistics/individual/daily
  /** 
   * User statistice - Daily value - v1/Statistics/individual/daily
  **/
  UserStatisticeDailyValueV1StatisticsIndividualDaily(
    req: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/individual/daily/";
    
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
        let res: operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserStatisticsAccumulatedValueV1StatisticsIndividual - User statistics - Accumulated value - /v1/Statistics/individual
  /** 
   * User statistics - Accumulated value - /v1/Statistics/individual
  **/
  UserStatisticsAccumulatedValueV1StatisticsIndividual(
    req: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics/v1/Statistics/individual/";
    
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
        let res: operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
