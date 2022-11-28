import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Developers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEvents - get events for analytics
     *
     * By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.
     *
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
}
