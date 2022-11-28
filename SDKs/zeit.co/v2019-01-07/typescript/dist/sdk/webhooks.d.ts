import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteWebhooks - Remove a webhook by id
    **/
    deleteWebhooks(req: operations.DeleteWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksResponse>;
    /**
     * getWebhooks - Get a list of existent webhooks
    **/
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
}
