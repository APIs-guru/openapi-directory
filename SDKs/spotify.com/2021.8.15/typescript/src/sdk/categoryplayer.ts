import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CategoryPlayer {
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
   * endpointAddToQueue - Add an item to queue
   *
   * Add an item to the end of the user's current playback queue.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-to-queue - Find more info on the official Spotify Web API Reference
  **/
  endpointAddToQueue(
    req: operations.EndpointAddToQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointAddToQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointAddToQueueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/queue";
    
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
        method: "post",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointAddToQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointGetAUsersAvailableDevices - Get a User's Available Devices
   *
   * Get information about a user's available devices.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices - Find more info on the official Spotify Web API Reference
  **/
  endpointGetAUsersAvailableDevices(
    req: operations.EndpointGetAUsersAvailableDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetAUsersAvailableDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetAUsersAvailableDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/devices";
    
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
        const res: operations.EndpointGetAUsersAvailableDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.devicesObject = httpRes?.data;
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
   * endpointGetInformationAboutTheUsersCurrentPlayback - Get Information About The User's Current Playback
   *
   * Get information about the user's current playback state, including track or episode, progress, and active device.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointGetInformationAboutTheUsersCurrentPlayback(
    req: operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player";
    
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
        const res: operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.currentlyPlayingContextObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
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
   * endpointGetRecentlyPlayed - Get Current User's Recently Played Tracks
   *
   * Get tracks from the current user's recently played tracks.
   * *Note: Currently doesn't support podcast episodes.*
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played - Find more info on the official Spotify Web API Reference
  **/
  endpointGetRecentlyPlayed(
    req: operations.EndpointGetRecentlyPlayedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetRecentlyPlayedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetRecentlyPlayedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/recently-played";
    
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
        const res: operations.EndpointGetRecentlyPlayedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endpointGetRecentlyPlayed200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
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
   * endpointGetTheUsersCurrentlyPlayingTrack - Get the User's Currently Playing Track
   *
   * Get the object currently being played on the user's Spotify account.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track - Find more info on the official Spotify Web API Reference
  **/
  endpointGetTheUsersCurrentlyPlayingTrack(
    req: operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/currently-playing";
    
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
        const res: operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.currentlyPlayingObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
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
   * endpointPauseAUsersPlayback - Pause a User's Playback
   *
   * Pause playback on the user's account.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointPauseAUsersPlayback(
    req: operations.EndpointPauseAUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointPauseAUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointPauseAUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/pause";
    
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
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointPauseAUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointSeekToPositionInCurrentlyPlayingTrack - Seek To Position In Currently Playing Track
   *
   * Seeks to the given position in the user's currently playing track.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track - Find more info on the official Spotify Web API Reference
  **/
  endpointSeekToPositionInCurrentlyPlayingTrack(
    req: operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/seek";
    
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
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointSetRepeatModeOnUsersPlayback - Set Repeat Mode On User’s Playback
   *
   * Set the repeat mode for the user's playback. Options are repeat-track,
   * repeat-context, and off.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointSetRepeatModeOnUsersPlayback(
    req: operations.EndpointSetRepeatModeOnUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSetRepeatModeOnUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSetRepeatModeOnUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/repeat";
    
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
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSetRepeatModeOnUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointSetVolumeForUsersPlayback - Set Volume For User's Playback
   *
   * Set the volume for the user's current playback device.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointSetVolumeForUsersPlayback(
    req: operations.EndpointSetVolumeForUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSetVolumeForUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSetVolumeForUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/volume";
    
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
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSetVolumeForUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointSkipUsersPlaybackToNextTrack - Skip User’s Playback To Next Track
   *
   * Skips to next track in the user's queue.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track - Find more info on the official Spotify Web API Reference
  **/
  endpointSkipUsersPlaybackToNextTrack(
    req: operations.EndpointSkipUsersPlaybackToNextTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSkipUsersPlaybackToNextTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSkipUsersPlaybackToNextTrackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/next";
    
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
        method: "post",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSkipUsersPlaybackToNextTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointSkipUsersPlaybackToPreviousTrack - Skip User’s Playback To Previous Track
   *
   * Skips to previous track in the user's queue.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track - Find more info on the official Spotify Web API Reference
  **/
  endpointSkipUsersPlaybackToPreviousTrack(
    req: operations.EndpointSkipUsersPlaybackToPreviousTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointSkipUsersPlaybackToPreviousTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointSkipUsersPlaybackToPreviousTrackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/previous";
    
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
        method: "post",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointSkipUsersPlaybackToPreviousTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointStartAUsersPlayback - Start/Resume a User's Playback
   *
   * Start a new context or resume current playback on the user's active device.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointStartAUsersPlayback(
    req: operations.EndpointStartAUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointStartAUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointStartAUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/play";

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
        const res: operations.EndpointStartAUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointToggleShuffleForUsersPlayback - Toggle Shuffle For User’s Playback
   *
   * Toggle shuffle on or off for user's playback.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointToggleShuffleForUsersPlayback(
    req: operations.EndpointToggleShuffleForUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointToggleShuffleForUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointToggleShuffleForUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player/shuffle";
    
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
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointToggleShuffleForUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * endpointTransferAUsersPlayback - Transfer a User's Playback
   *
   * Transfer playback to a new device and determine if it should start playing.
   *
   * https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback - Find more info on the official Spotify Web API Reference
  **/
  endpointTransferAUsersPlayback(
    req: operations.EndpointTransferAUsersPlaybackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EndpointTransferAUsersPlaybackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EndpointTransferAUsersPlaybackRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/player";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EndpointTransferAUsersPlaybackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
