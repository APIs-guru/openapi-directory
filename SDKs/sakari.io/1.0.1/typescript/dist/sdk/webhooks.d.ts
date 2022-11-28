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
     * webhooksFetchAll - Fetch active webhooks
     *
     * When messages are acknowledge by carriers, a notification is sent to the specified URL
    **/
    webhooksFetchAll(req: operations.WebhooksFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksFetchAllResponse>;
    /**
     * webhooksSubscribe - Subscribe to message events
     *
     * When messages are acknowledge by carriers, a notification is sent to the specified URL
    **/
    webhooksSubscribe(req: operations.WebhooksSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksSubscribeResponse>;
}
