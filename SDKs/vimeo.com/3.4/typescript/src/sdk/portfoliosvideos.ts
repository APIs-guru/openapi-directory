import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PortfoliosVideos {
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
   * addVideoToPortfolio - Add a video to a portfolio
  **/
  addVideoToPortfolio(
    req: operations.AddVideoToPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVideoToPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVideoToPortfolioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddVideoToPortfolioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * addVideoToPortfolioAlt1 - Add a video to a portfolio
  **/
  addVideoToPortfolioAlt1(
    req: operations.AddVideoToPortfolioAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVideoToPortfolioAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVideoToPortfolioAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddVideoToPortfolioAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteVideoFromPortfolio - Remove a video from a portfolio
  **/
  deleteVideoFromPortfolio(
    req: operations.DeleteVideoFromPortfolioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideoFromPortfolioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideoFromPortfolioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideoFromPortfolioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteVideoFromPortfolioAlt1 - Remove a video from a portfolio
  **/
  deleteVideoFromPortfolioAlt1(
    req: operations.DeleteVideoFromPortfolioAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideoFromPortfolioAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideoFromPortfolioAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideoFromPortfolioAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * getPortfolioVideo - Get a specific video in a portfolio
  **/
  getPortfolioVideo(
    req: operations.GetPortfolioVideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortfolioVideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortfolioVideoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPortfolioVideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.video+json`)) {
                res.video = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPortfolioVideoAlt1 - Get a specific video in a portfolio
  **/
  getPortfolioVideoAlt1(
    req: operations.GetPortfolioVideoAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortfolioVideoAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortfolioVideoAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/portfolios/{portfolio_id}/videos/{video_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPortfolioVideoAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.video+json`)) {
                res.video = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPortfolioVideos - Get all the videos in a portfolio
  **/
  getPortfolioVideos(
    req: operations.GetPortfolioVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortfolioVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortfolioVideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/portfolios/{portfolio_id}/videos", req.pathParams);
    
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
        const res: operations.GetPortfolioVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.video+json`)) {
                res.videos = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPortfolioVideosAlt1 - Get all the videos in a portfolio
  **/
  getPortfolioVideosAlt1(
    req: operations.GetPortfolioVideosAlt1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortfolioVideosAlt1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortfolioVideosAlt1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/me/portfolios/{portfolio_id}/videos", req.pathParams);
    
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
        const res: operations.GetPortfolioVideosAlt1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/vnd.vimeo.video+json`)) {
                res.videos = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
