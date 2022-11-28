import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://weather.visualcrossing.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
     *
     * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
    **/
    getVisualCrossingWebServicesRestServicesWeatherdataForecast(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse>;
    /**
     * getVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
     *
     * The weather history data is suitable for retrieving hourly or daily historical weather records.
    **/
    getVisualCrossingWebServicesRestServicesWeatherdataHistory(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse>;
}
export {};
