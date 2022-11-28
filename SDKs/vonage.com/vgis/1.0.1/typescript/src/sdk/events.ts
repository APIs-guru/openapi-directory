import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Events {
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
   * getEvent - Get event
  **/
  getEvent(
    req: operations.GetEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/self/events/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEventsCount - Get events count
  **/
  getEventsCount(
    req: operations.GetEventsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventsCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/events/count";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetEventsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventsCount = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listEvents - List events
  **/
  listEvents(
    req: operations.ListEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/self/events";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.ListEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.events = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
