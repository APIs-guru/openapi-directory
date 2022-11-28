import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WebhookInstances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteWebhookInstance - DELETE a WebhookInstance
     *
     * DELETE a specific WebhookInstance
    **/
    deleteWebhookInstance(req: operations.DeleteWebhookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookInstanceResponse>;
    /**
     * getWebhookInstances - GET a WebhookInstance
     *
     * GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.
    **/
    getWebhookInstances(config?: AxiosRequestConfig): Promise<operations.GetWebhookInstancesResponse>;
}
