import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Webhooks {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteWebhooksId - Delete webhook
   *
   * Delete a specific webhook by providing its unique identifier. Once
   * deleted, webhook events will no longer be sent to the configured URL.
   * 
  **/
  deleteWebhooksId(
    req: operations.DeleteWebhooksIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhooksIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhooksIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhooksIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWebhooks - List webhooks
   *
   * Retrieve a list of configured webhooks. The returned list is
   * [paginated](#pagination) and can be scrolled by following the `next`
   * and `prev` links where present. Results are ordered oldest first to
   * newest last.
   * 
  **/
  getWebhooks(
    req: operations.GetWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWebhooksResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWebhooksId - Retrieve webhook
   *
   * Retrieve a specific webhook by providing its unique identifier.
   * 
  **/
  getWebhooksId(
    req: operations.GetWebhooksIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  getWebhooksWebhookIdLogs(
    req: operations.GetWebhooksWebhookIdLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksWebhookIdLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksWebhookIdLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}/logs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksWebhookIdLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWebhookDeliveryLogsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postWebhooksWebhookIdPing - Ping webhook
   *
   * Send a `PING` event to a webhook by providing its unique identifier.
   * This is useful for testing and debugging purposes. The event is delivered
   * asynchronously and its data is returned in the response to this request.
   * 
  **/
  postWebhooksWebhookIdPing(
    req: operations.PostWebhooksWebhookIdPingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksWebhookIdPingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksWebhookIdPingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}/ping", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostWebhooksWebhookIdPingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webhookEventCallback = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
