import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoryLibrary {
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
   * endpointCheckUsersSavedAlbums - Check User's Saved Albums
   *
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-albums - Find more info on the official Spotify Web API Reference
  **/
  endpointCheckUsersSavedAlbums(
    req: operations.EndpointCheckUsersSavedAlbumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointCheckUsersSavedAlbumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointCheckUsersSavedAlbumsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/albums/contains";
    
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
        const res: operations.EndpointCheckUsersSavedAlbumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointCheckUsersSavedAlbums200ApplicationJsonBooleans = httpRes?.data;
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
   * endpointCheckUsersSavedEpisodes - Check User's Saved Episodes
   *
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.  
   * 
   * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-episodes - Find more info on the official Spotify Web API Reference
  **/
  endpointCheckUsersSavedEpisodes(
    req: operations.EndpointCheckUsersSavedEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointCheckUsersSavedEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointCheckUsersSavedEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/episodes/contains";
    
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
        const res: operations.EndpointCheckUsersSavedEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointCheckUsersSavedEpisodes200ApplicationJsonBooleans = httpRes?.data;
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
   * endpointCheckUsersSavedShows - Check User's Saved Shows
   *
   * Check if one or more shows is already saved in the current Spotify user's library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-shows - Find more info on the official Spotify Web API Reference
  **/
  endpointCheckUsersSavedShows(
    req: operations.EndpointCheckUsersSavedShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointCheckUsersSavedShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointCheckUsersSavedShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/shows/contains";
    
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
        const res: operations.EndpointCheckUsersSavedShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointCheckUsersSavedShows200ApplicationJsonBooleans = httpRes?.data;
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
   * endpointCheckUsersSavedTracks - Check User's Saved Tracks
   *
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-tracks - Find more info on the official Spotify Web API Reference
  **/
  endpointCheckUsersSavedTracks(
    req: operations.EndpointCheckUsersSavedTracksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointCheckUsersSavedTracksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointCheckUsersSavedTracksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/tracks/contains";
    
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
        const res: operations.EndpointCheckUsersSavedTracksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointCheckUsersSavedTracks200ApplicationJsonBooleans = httpRes?.data;
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
   * endpointGetUsersSavedAlbums - Get User's Saved Albums
   *
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-albums - Find more info on the official Spotify Web API Reference
  **/
  endpointGetUsersSavedAlbums(
    req: operations.EndpointGetUsersSavedAlbumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetUsersSavedAlbumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetUsersSavedAlbumsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/albums";
    
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
        const res: operations.EndpointGetUsersSavedAlbumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetUsersSavedAlbums200ApplicationJsonObject = httpRes?.data;
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
   * endpointGetUsersSavedEpisodes - Get User's Saved Episodes
   *
   * Get a list of the episodes saved in the current Spotify user's library.  
   * 
   * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-episodes - Find more info on the official Spotify Web API Reference
  **/
  endpointGetUsersSavedEpisodes(
    req: operations.EndpointGetUsersSavedEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetUsersSavedEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetUsersSavedEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/episodes";
    
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
        const res: operations.EndpointGetUsersSavedEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetUsersSavedEpisodes200ApplicationJsonObject = httpRes?.data;
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
   * endpointGetUsersSavedShows - Get User's Saved Shows
   *
   * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-shows - Find more info on the official Spotify Web API Reference
  **/
  endpointGetUsersSavedShows(
    req: operations.EndpointGetUsersSavedShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetUsersSavedShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetUsersSavedShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/shows";
    
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
        const res: operations.EndpointGetUsersSavedShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetUsersSavedShows200ApplicationJsonObject = httpRes?.data;
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
   * endpointGetUsersSavedTracks - Get User's Saved Tracks
   *
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-tracks - Find more info on the official Spotify Web API Reference
  **/
  endpointGetUsersSavedTracks(
    req: operations.EndpointGetUsersSavedTracksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetUsersSavedTracksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetUsersSavedTracksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/tracks";
    
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
        const res: operations.EndpointGetUsersSavedTracksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetUsersSavedTracks200ApplicationJsonObject = httpRes?.data;
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
   * endpointRemoveAlbumsUser - Remove Albums for Current User
   *
   * Remove one or more albums from the current user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-albums-user - Find more info on the official Spotify Web API Reference
  **/
  endpointRemoveAlbumsUser(
    req: operations.EndpointRemoveAlbumsUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointRemoveAlbumsUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointRemoveAlbumsUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/albums";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointRemoveAlbumsUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointRemoveEpisodesUser - Remove User's Saved Episodes
   *
   * Remove one or more episodes from the current user's library.  
   * 
   * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-episodes-user - Find more info on the official Spotify Web API Reference
  **/
  endpointRemoveEpisodesUser(
    req: operations.EndpointRemoveEpisodesUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointRemoveEpisodesUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointRemoveEpisodesUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/episodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointRemoveEpisodesUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointRemoveShowsUser - Remove User's Saved Shows
   *
   * Delete one or more shows from current Spotify user's library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-shows-user - Find more info on the official Spotify Web API Reference
  **/
  endpointRemoveShowsUser(
    req: operations.EndpointRemoveShowsUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointRemoveShowsUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointRemoveShowsUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointRemoveShowsUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointRemoveTracksUser - Remove User's Saved Tracks
   *
   * Remove one or more tracks from the current user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-user - Find more info on the official Spotify Web API Reference
  **/
  endpointRemoveTracksUser(
    req: operations.EndpointRemoveTracksUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointRemoveTracksUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointRemoveTracksUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/tracks";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointRemoveTracksUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointSaveAlbumsUser - Save Albums for Current User
   *
   * Save one or more albums to the current user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-albums-user - Find more info on the official Spotify Web API Reference
  **/
  endpointSaveAlbumsUser(
    req: operations.EndpointSaveAlbumsUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSaveAlbumsUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSaveAlbumsUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/albums";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSaveAlbumsUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
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
   * endpointSaveEpisodesUser - Save Episodes for User
   *
   * Save one or more episodes to the current user's library.  
   * 
   * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-episodes-user - Find more info on the official Spotify Web API Reference
  **/
  endpointSaveEpisodesUser(
    req: operations.EndpointSaveEpisodesUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSaveEpisodesUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSaveEpisodesUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/episodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSaveEpisodesUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointSaveShowsUser - Save Shows for Current User
   *
   * Save one or more shows to current Spotify user's library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-shows-user - Find more info on the official Spotify Web API Reference
  **/
  endpointSaveShowsUser(
    req: operations.EndpointSaveShowsUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSaveShowsUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSaveShowsUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSaveShowsUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * endpointSaveTracksUser - Save Tracks for User
   *
   * Save one or more tracks to the current user's 'Your Music' library.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-tracks-user - Find more info on the official Spotify Web API Reference
  **/
  endpointSaveTracksUser(
    req: operations.EndpointSaveTracksUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSaveTracksUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSaveTracksUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/tracks";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSaveTracksUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
