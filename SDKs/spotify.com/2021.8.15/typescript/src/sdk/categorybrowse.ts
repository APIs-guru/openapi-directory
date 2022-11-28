import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoryBrowse {
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
   * endpointGetACategoriesPlaylists - Get a Category's Playlists
   *
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists - Find more info on the official Spotify Web API Reference
  **/
  endpointGetACategoriesPlaylists(
    req: operations.EndpointGetACategoriesPlaylistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetACategoriesPlaylistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetACategoriesPlaylistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/browse/categories/{category_id}/playlists", req.pathParams);
    
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
        const res: operations.EndpointGetACategoriesPlaylistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playlistPagingObject = httpRes?.data;
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
   * endpointGetACategory - Get a Category
   *
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category - Find more info on the official Spotify Web API Reference
  **/
  endpointGetACategory(
    req: operations.EndpointGetACategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetACategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetACategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/browse/categories/{category_id}", req.pathParams);
    
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
        const res: operations.EndpointGetACategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.categoryObject = httpRes?.data;
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
   * endpointGetCategories - Get All Categories
   *
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories - Find more info on the official Spotify Web API Reference
  **/
  endpointGetCategories(
    req: operations.EndpointGetCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/browse/categories";
    
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
        const res: operations.EndpointGetCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.categoriesObject = httpRes?.data;
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
   * endpointGetFeaturedPlaylists - Get All Featured Playlists
   *
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists - Find more info on the official Spotify Web API Reference
  **/
  endpointGetFeaturedPlaylists(
    req: operations.EndpointGetFeaturedPlaylistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetFeaturedPlaylistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetFeaturedPlaylistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/browse/featured-playlists";
    
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
        const res: operations.EndpointGetFeaturedPlaylistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.featuredPlaylistObject = httpRes?.data;
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
   * endpointGetNewReleases - Get All New Releases
   *
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player's "Browse" tab).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases - Find more info on the official Spotify Web API Reference
  **/
  endpointGetNewReleases(
    req: operations.EndpointGetNewReleasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetNewReleasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetNewReleasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/browse/new-releases";
    
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
        const res: operations.EndpointGetNewReleasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.newReleasesObject = httpRes?.data;
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
   * endpointGetRecommendationGenres - Get Recommendation Genres
   *
   * Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendation-genres - Find more info on the official Spotify Web API Reference
  **/
  endpointGetRecommendationGenres(
    req: operations.EndpointGetRecommendationGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetRecommendationGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetRecommendationGenresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/recommendations/available-genre-seeds";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointGetRecommendationGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genreSeedsObject = httpRes?.data;
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
   * endpointGetRecommendations - Get Recommendations
   *
   * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations - Find more info on the official Spotify Web API Reference
  **/
  endpointGetRecommendations(
    req: operations.EndpointGetRecommendationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetRecommendationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetRecommendationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/recommendations";
    
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
        const res: operations.EndpointGetRecommendationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.recommendationsObject = httpRes?.data;
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
