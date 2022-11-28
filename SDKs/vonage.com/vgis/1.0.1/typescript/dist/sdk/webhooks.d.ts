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
     * createWebhook - Create a new webhook subscription
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * destroyWebhook - Remove a web hook
    **/
    destroyWebhook(req: operations.DestroyWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DestroyWebhookResponse>;
    /**
     * listWebhooks - List web hooks
    **/
    listWebhooks(config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * renewWebhook - Renews a web hook
    **/
    renewWebhook(req: operations.RenewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.RenewWebhookResponse>;
    /**
     * viewWebhook - Get web hook details
    **/
    viewWebhook(req: operations.ViewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ViewWebhookResponse>;
}
