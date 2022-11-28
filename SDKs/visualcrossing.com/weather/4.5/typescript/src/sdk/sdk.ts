import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation*/
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
   * getVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
   *
   * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
  **/
  getVisualCrossingWebServicesRestServicesWeatherdataForecast(
    req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest(req);
    }
    
    let baseURL: string = operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast";
    
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
        const res: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
   *
   * The weather history data is suitable for retrieving hourly or daily historical weather records.
  **/
  getVisualCrossingWebServicesRestServicesWeatherdataHistory(
    req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest(req);
    }
    
    let baseURL: string = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/VisualCrossingWebServices/rest/services/weatherdata/history";
    
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
        const res: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
