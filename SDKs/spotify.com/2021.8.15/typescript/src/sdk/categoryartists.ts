import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoryArtists {
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
   * endpointGetAnArtist - Get an Artist
   *
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artist - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAnArtist(
    req: operations.EndpointGetAnArtistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAnArtistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAnArtistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artists/{id}", req.pathParams);
    
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
        const res: operations.EndpointGetAnArtistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artistObject = httpRes?.data;
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
   * endpointGetAnArtistsAlbums - Get an Artist's Albums
   *
   * Get Spotify catalog information about an artist's albums.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-albums - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAnArtistsAlbums(
    req: operations.EndpointGetAnArtistsAlbumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAnArtistsAlbumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAnArtistsAlbumsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artists/{id}/albums", req.pathParams);
    
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
        const res: operations.EndpointGetAnArtistsAlbumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetAnArtistsAlbums200ApplicationJsonObject = httpRes?.data;
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
   * endpointGetAnArtistsRelatedArtists - Get an Artist's Related Artists
   *
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAnArtistsRelatedArtists(
    req: operations.EndpointGetAnArtistsRelatedArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAnArtistsRelatedArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAnArtistsRelatedArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artists/{id}/related-artists", req.pathParams);
    
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
        const res: operations.EndpointGetAnArtistsRelatedArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artistsObject = httpRes?.data;
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
   * endpointGetAnArtistsTopTracks - Get an Artist's Top Tracks
   *
   * Get Spotify catalog information about an artist's top tracks by country.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-top-tracks - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAnArtistsTopTracks(
    req: operations.EndpointGetAnArtistsTopTracksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAnArtistsTopTracksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAnArtistsTopTracksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artists/{id}/top-tracks", req.pathParams);
    
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
        const res: operations.EndpointGetAnArtistsTopTracksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tracksObject = httpRes?.data;
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
   * endpointGetMultipleArtists - Get Multiple Artists
   *
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists - Find more info on the official Spotify Web API Reference
  **/
  endpointGetMultipleArtists(
    req: operations.EndpointGetMultipleArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetMultipleArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetMultipleArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/artists";
    
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
        const res: operations.EndpointGetMultipleArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artistsObject = httpRes?.data;
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
