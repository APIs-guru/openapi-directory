import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://weather.visualcrossing.com",
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

// SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation
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
  
  // GetVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
  /** 
   * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
  **/
  GetVisualCrossingWebServicesRestServicesWeatherdataForecast(
    req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest(req);
    }
    
    let baseURL: string = operations.GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAFORECAST_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast";
    
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
        let res: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
  /** 
   * The weather history data is suitable for retrieving hourly or daily historical weather records.
  **/
  GetVisualCrossingWebServicesRestServicesWeatherdataHistory(
    req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest(req);
    }
    
    let baseURL: string = operations.GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAHISTORY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/VisualCrossingWebServices/rest/services/weatherdata/history";
    
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
        let res: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
