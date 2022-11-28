import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoriesSubscriptions {
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
   * checkIfUserSubscribedToCategory - Check if a user follows a category
  **/
  checkIfUserSubscribedToCategory(
    req: operations.CheckIfUserSubscribedToCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckIfUserSubscribedToCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckIfUserSubscribedToCategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckIfUserSubscribedToCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * checkIfUserSubscribedToCategoryAlt1 - Check if a user follows a category
  **/
  checkIfUserSubscribedToCategoryAlt1(
    req: operations.CheckIfUserSubscribedToCategoryAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckIfUserSubscribedToCategoryAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckIfUserSubscribedToCategoryAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckIfUserSubscribedToCategoryAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategorySubscriptions - Get all the categories that a user follows
  **/
  getCategorySubscriptions(
    req: operations.GetCategorySubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategorySubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategorySubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/categories", req.pathParams);
    
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
        const res: operations.GetCategorySubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.category+json`)) {
                res.categories = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.category+json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCategorySubscriptionsAlt1 - Get all the categories that a user follows
  **/
  getCategorySubscriptionsAlt1(
    req: operations.GetCategorySubscriptionsAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategorySubscriptionsAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategorySubscriptionsAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/categories";
    
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
        const res: operations.GetCategorySubscriptionsAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.category+json`)) {
                res.categories = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.category+json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeToCategory - Subscribe a user to a single category
  **/
  subscribeToCategory(
    req: operations.SubscribeToCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeToCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeToCategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeToCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeToCategoryAlt1 - Subscribe a user to a single category
  **/
  subscribeToCategoryAlt1(
    req: operations.SubscribeToCategoryAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeToCategoryAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeToCategoryAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeToCategoryAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsubscribeFromCategory - Unsubscribe a user from a category
  **/
  unsubscribeFromCategory(
    req: operations.UnsubscribeFromCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeFromCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeFromCategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsubscribeFromCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsubscribeFromCategoryAlt1 - Unsubscribe a user from a category
  **/
  unsubscribeFromCategoryAlt1(
    req: operations.UnsubscribeFromCategoryAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeFromCategoryAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeFromCategoryAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/categories/{category}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsubscribeFromCategoryAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
