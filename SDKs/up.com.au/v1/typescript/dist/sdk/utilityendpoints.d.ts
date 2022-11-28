import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UtilityEndpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUtilPing - Ping
     *
     * Make a basic ping request to the API. This is useful to verify that
     * authentication is functioning correctly. On authentication success an
     * HTTP `200` status is returned. On failure an HTTP `401` error response
     * is returned.
     *
    **/
    getUtilPing(config?: AxiosRequestConfig): Promise<operations.GetUtilPingResponse>;
}
