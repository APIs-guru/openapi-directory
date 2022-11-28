import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Html {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHtml - Page HTML by URL
     *
     * Returns just HTML on success, JSON on error
    **/
    getHtml(req: operations.GetHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlResponse>;
}
