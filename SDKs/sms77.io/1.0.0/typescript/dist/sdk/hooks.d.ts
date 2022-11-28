import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Hooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    hooksGet(req: operations.HooksGetRequest, config?: AxiosRequestConfig): Promise<operations.HooksGetResponse>;
    hooksPost(req: operations.HooksPostRequest, config?: AxiosRequestConfig): Promise<operations.HooksPostResponse>;
}
