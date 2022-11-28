import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosLanguages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLanguages - Get all languages
    **/
    getLanguages(req: operations.GetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
}
