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
     * deleteWebhooksId - Delete webhook
     *
     * Delete a specific webhook by providing its unique identifier. Once
     * deleted, webhook events will no longer be sent to the configured URL.
     *
    **/
    deleteWebhooksId(req: operations.DeleteWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdResponse>;
    /**
     * getWebhooks - List webhooks
     *
     * Retrieve a list of configured webhooks. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered oldest first to
     * newest last.
     *
    **/
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * getWebhooksId - Retrieve webhook
     *
     * Retrieve a specific webhook by providing its unique identifier.
     *
    **/
    getWebhooksId(req: operations.GetWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdResponse>;
    /**
     * getWebhooksWebhookIdLogs - List webhook logs
     *
     * Retrieve a list of delivery logs for a webhook by providing its unique
     * identifier. This is useful for analysis and debugging purposes. The
     * returned list is [paginated](#pagination) and can be scrolled by
     * following the `next` and `prev` links where present. Results are ordered
     * newest first to oldest last. Logs may be automatically purged after a
     * period of time.
     *
    **/
    getWebhooksWebhookIdLogs(req: operations.GetWebhooksWebhookIdLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksWebhookIdLogsResponse>;
    /**
     * postWebhooksWebhookIdPing - Ping webhook
     *
     * Send a `PING` event to a webhook by providing its unique identifier.
     * This is useful for testing and debugging purposes. The event is delivered
     * asynchronously and its data is returned in the response to this request.
     *
    **/
    postWebhooksWebhookIdPing(req: operations.PostWebhooksWebhookIdPingRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksWebhookIdPingResponse>;
}
