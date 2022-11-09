import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
    **/
    GetVisualCrossingWebServicesRestServicesWeatherdataForecast(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse>;
    /**
     * The weather history data is suitable for retrieving hourly or daily historical weather records.
    **/
    GetVisualCrossingWebServicesRestServicesWeatherdataHistory(req: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse>;
}
export {};
