import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOpenApiSpec - Returns the open api spec document.
     *
     * Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
    **/
    getOpenApiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenApiSpecResponse>;
}
