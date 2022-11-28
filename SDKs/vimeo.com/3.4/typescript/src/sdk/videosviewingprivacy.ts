import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class VideosViewingPrivacy {
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
   * addVideoPrivacyUser - Permit a specific user to view a private video
  **/
  addVideoPrivacyUser(
    req: operations.AddVideoPrivacyUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVideoPrivacyUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVideoPrivacyUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{video_id}/privacy/users/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddVideoPrivacyUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.user = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.legacyError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addVideoPrivacyUsers - Permit a list of users to view a private video
   *
   * The body of this request should follow our
   * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
   * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
  **/
  addVideoPrivacyUsers(
    req: operations.AddVideoPrivacyUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVideoPrivacyUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVideoPrivacyUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{video_id}/privacy/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddVideoPrivacyUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.users = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addVideoPrivacyUsersAlt1 - Permit a list of users to view a private video
   *
   * The body of this request should follow our
   * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
   * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
  **/
  addVideoPrivacyUsersAlt1(
    req: operations.AddVideoPrivacyUsersAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVideoPrivacyUsersAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVideoPrivacyUsersAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/channels/{channel_id}/videos/{video_id}/privacy/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddVideoPrivacyUsersAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.users = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteVideoPrivacyUser - Restrict a user from viewing a private video
  **/
  deleteVideoPrivacyUser(
    req: operations.DeleteVideoPrivacyUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideoPrivacyUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideoPrivacyUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{video_id}/privacy/users/{user_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideoPrivacyUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.legacyError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.legacyError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideoPrivacyUsers - Get all the users who can view a user's private videos by default
  **/
  getVideoPrivacyUsers(
    req: operations.GetVideoPrivacyUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoPrivacyUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoPrivacyUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{video_id}/privacy/users", req.pathParams);
    
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
        const res: operations.GetVideoPrivacyUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.users = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.legacyError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideoPrivacyUsersAlt1 - Get all the users who can view a user's private videos by default
  **/
  getVideoPrivacyUsersAlt1(
    req: operations.GetVideoPrivacyUsersAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoPrivacyUsersAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoPrivacyUsersAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/channels/{channel_id}/videos/{video_id}/privacy/users", req.pathParams);
    
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
        const res: operations.GetVideoPrivacyUsersAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.users = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.user+json`)) {
                res.legacyError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
