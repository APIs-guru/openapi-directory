import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CheckApiUsage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiUsagePlansV2 - Get API Isage
     *
     * Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.
    **/
    getApiUsagePlansV2(req: operations.GetApiUsagePlansV2Request, config?: AxiosRequestConfig): Promise<operations.GetApiUsagePlansV2Response>;
}
