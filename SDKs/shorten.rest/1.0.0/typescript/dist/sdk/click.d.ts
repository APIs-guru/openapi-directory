import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Click {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getClicks - Get clicks
     *
     * Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order.
     *
     *  If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
    **/
    getClicks(req: operations.GetClicksRequest, config?: AxiosRequestConfig): Promise<operations.GetClicksResponse>;
}
