import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SelectedHtml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSelected - HTML of a selected page area by URL and CSS selector
     *
     * Returns just HTML on success, JSON on error
    **/
    getSelected(req: operations.GetSelectedRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedResponse>;
    /**
     * getSelectedMultiple - HTML of multiple page areas by URL and CSS selectors
     *
     * Always returns JSON
    **/
    getSelectedMultiple(req: operations.GetSelectedMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedMultipleResponse>;
}
