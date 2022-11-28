import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoryShows {
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
   * endpointGetAShow - Get a Show
   *
   * Get Spotify catalog information for a single show identified by its
   * unique Spotify ID.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAShow(
    req: operations.EndpointGetAShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shows/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointGetAShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * endpointGetAShowsEpisodes - Get a Show's Episodes
   *
   * Get Spotify catalog information about an show's episodes. Optional parameters can be used to limit the number of episodes returned.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAShowsEpisodes(
    req: operations.EndpointGetAShowsEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAShowsEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAShowsEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shows/{id}/episodes", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointGetAShowsEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetAShowsEpisodes200ApplicationJsonObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * endpointGetMultipleShows - Get Multiple Shows
   *
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows - Find more info on the official Spotify Web API Reference
  **/
  endpointGetMultipleShows(
    req: operations.EndpointGetMultipleShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetMultipleShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetMultipleShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shows";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointGetMultipleShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showsObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
