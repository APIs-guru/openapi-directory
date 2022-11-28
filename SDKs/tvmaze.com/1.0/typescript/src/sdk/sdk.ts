import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.tvmaze.com/v1",
	"http://api.tvmaze.com/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * deleteUserEpisodesEpisodeId - Unmark an episode
  **/
  deleteUserEpisodesEpisodeId(
    req: operations.DeleteUserEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserFollowsNetworksNetworkId - Unfollow a network
  **/
  deleteUserFollowsNetworksNetworkId(
    req: operations.DeleteUserFollowsNetworksNetworkIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserFollowsNetworksNetworkIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserFollowsNetworksNetworkIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserFollowsNetworksNetworkIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserFollowsPeoplePersonId - Unfollow a person
  **/
  deleteUserFollowsPeoplePersonId(
    req: operations.DeleteUserFollowsPeoplePersonIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserFollowsPeoplePersonIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserFollowsPeoplePersonIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserFollowsPeoplePersonIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserFollowsShowsShowId - Unfollow a show
  **/
  deleteUserFollowsShowsShowId(
    req: operations.DeleteUserFollowsShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserFollowsShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserFollowsShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserFollowsShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserFollowsWebchannelsWebchannelId - Unfollow a webchannel
  **/
  deleteUserFollowsWebchannelsWebchannelId(
    req: operations.DeleteUserFollowsWebchannelsWebchannelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserFollowsWebchannelsWebchannelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserFollowsWebchannelsWebchannelIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserFollowsWebchannelsWebchannelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserTagsTagId - Delete a specific tag
  **/
  deleteUserTagsTagId(
    req: operations.DeleteUserTagsTagIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserTagsTagIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserTagsTagIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/tags/{tag_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserTagsTagIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserTagsTagIdShowsShowId - Untag a show
  **/
  deleteUserTagsTagIdShowsShowId(
    req: operations.DeleteUserTagsTagIdShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserTagsTagIdShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserTagsTagIdShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserTagsTagIdShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserVotesEpisodesEpisodeId - Remove an episode vote
  **/
  deleteUserVotesEpisodesEpisodeId(
    req: operations.DeleteUserVotesEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserVotesEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserVotesEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserVotesEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserVotesShowsShowId - Remove a show vote
  **/
  deleteUserVotesShowsShowId(
    req: operations.DeleteUserVotesShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserVotesShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserVotesShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserVotesShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAuthValidate - Validate your authentication credentials
   *
   * If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
  **/
  getAuthValidate(
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthValidateResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/validate";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAuthValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAuthValidate200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getScrobbleShowsShowId - List watched and acquired episodes for a show
   *
   * This endpoint can be used by all users, even without premium
  **/
  getScrobbleShowsShowId(
    req: operations.GetScrobbleShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScrobbleShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScrobbleShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scrobble/shows/{show_id}", req.pathParams);
    
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
        const res: operations.GetScrobbleShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.markedEpisodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserEpisodes - List the marked episodes
  **/
  getUserEpisodes(
    req: operations.GetUserEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/episodes";
    
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
        const res: operations.GetUserEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.markedEpisodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserEpisodesEpisodeId - Check if an episode is marked
  **/
  getUserEpisodesEpisodeId(
    req: operations.GetUserEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.markedEpisode = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsNetworks - List the followed networks
  **/
  getUserFollowsNetworks(
    req: operations.GetUserFollowsNetworksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsNetworksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsNetworksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/follows/networks";
    
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
        const res: operations.GetUserFollowsNetworksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.networkFollows = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsNetworksNetworkId - Check if a network is followed
  **/
  getUserFollowsNetworksNetworkId(
    req: operations.GetUserFollowsNetworksNetworkIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsNetworksNetworkIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsNetworksNetworkIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserFollowsNetworksNetworkIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.networkFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsPeople - List the followed people
  **/
  getUserFollowsPeople(
    req: operations.GetUserFollowsPeopleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsPeopleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsPeopleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/follows/people";
    
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
        const res: operations.GetUserFollowsPeopleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.personFollows = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsPeoplePersonId - Check if a person is followed
  **/
  getUserFollowsPeoplePersonId(
    req: operations.GetUserFollowsPeoplePersonIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsPeoplePersonIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsPeoplePersonIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserFollowsPeoplePersonIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.personFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsShows - List the followed shows
  **/
  getUserFollowsShows(
    req: operations.GetUserFollowsShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/follows/shows";
    
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
        const res: operations.GetUserFollowsShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showFollows = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsShowsShowId - Check if a show is followed
  **/
  getUserFollowsShowsShowId(
    req: operations.GetUserFollowsShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserFollowsShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsWebchannels - List the followed webchannels
  **/
  getUserFollowsWebchannels(
    req: operations.GetUserFollowsWebchannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsWebchannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsWebchannelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/follows/webchannels";
    
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
        const res: operations.GetUserFollowsWebchannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webchannelFollows = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserFollowsWebchannelsWebchannelId - Check if a webchannel is followed
  **/
  getUserFollowsWebchannelsWebchannelId(
    req: operations.GetUserFollowsWebchannelsWebchannelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserFollowsWebchannelsWebchannelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserFollowsWebchannelsWebchannelIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserFollowsWebchannelsWebchannelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webchannelFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserTags - List all tags
  **/
  getUserTags(
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserTagsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/tags";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tags = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserTagsTagIdShows - List all shows under this tag
  **/
  getUserTagsTagIdShows(
    req: operations.GetUserTagsTagIdShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserTagsTagIdShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserTagsTagIdShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows", req.pathParams);
    
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
        const res: operations.GetUserTagsTagIdShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagInstances = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserVotesEpisodes - List the episodes voted for
  **/
  getUserVotesEpisodes(
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserVotesEpisodesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/votes/episodes";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserVotesEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.episodeVotes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserVotesEpisodesEpisodeId - Check if an episode is voted for
  **/
  getUserVotesEpisodesEpisodeId(
    req: operations.GetUserVotesEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserVotesEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserVotesEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserVotesEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.episodeVote = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserVotesShows - List the shows voted for
  **/
  getUserVotesShows(
    req: operations.GetUserVotesShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserVotesShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserVotesShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/votes/shows";
    
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
        const res: operations.GetUserVotesShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showVotes = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserVotesShowsShowId - Check if a show is voted for
  **/
  getUserVotesShowsShowId(
    req: operations.GetUserVotesShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserVotesShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserVotesShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserVotesShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showVote = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchUserTagsTagId - Update a specific tag
  **/
  patchUserTagsTagId(
    req: operations.PatchUserTagsTagIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchUserTagsTagIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchUserTagsTagIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/tags/{tag_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchUserTagsTagIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tag = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAuthPoll - Poll whether an authentication request was confirmed
   *
   * Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.
   * 
   * When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.
   * 
   * For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.
   * 
  **/
  postAuthPoll(
    req: operations.PostAuthPollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthPollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthPollRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/poll";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAuthPollResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAuthPoll200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAuthStart - Start an authentication request
   *
   * If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.
   * 
   * To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.
   * 
   * Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.
   * 
  **/
  postAuthStart(
    req: operations.PostAuthStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/start";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAuthStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAuthStart200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
   *
   * This endpoint can be used by all users, even without premium
  **/
  postScrobbleEpisodes(
    req: operations.PostScrobbleEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScrobbleEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScrobbleEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scrobble/episodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostScrobbleEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 207:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
   *
   * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
   * 
   * This endpoint can be used by all users, even without premium.
   * 
  **/
  postScrobbleShows(
    req: operations.PostScrobbleShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScrobbleShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScrobbleShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scrobble/shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostScrobbleShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 207:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUserTags - Create a new tag
  **/
  postUserTags(
    req: operations.PostUserTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/tags";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUserTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tag = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
   *
   * This endpoint can be used by all users, even without premium
  **/
  putScrobbleEpisodesEpisodeId(
    req: operations.PutScrobbleEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutScrobbleEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutScrobbleEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/scrobble/episodes/{episode_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutScrobbleEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.markedEpisode = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserEpisodesEpisodeId - Mark an episode
   *
   * Set `marked_at` to `NULL` or leave it out to use the current time.
  **/
  putUserEpisodesEpisodeId(
    req: operations.PutUserEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/episodes/{episode_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutUserEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.markedEpisode = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserFollowsNetworksNetworkId - Follow a network
  **/
  putUserFollowsNetworksNetworkId(
    req: operations.PutUserFollowsNetworksNetworkIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserFollowsNetworksNetworkIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserFollowsNetworksNetworkIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/networks/{network_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUserFollowsNetworksNetworkIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.networkFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserFollowsPeoplePersonId - Follow a person
  **/
  putUserFollowsPeoplePersonId(
    req: operations.PutUserFollowsPeoplePersonIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserFollowsPeoplePersonIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserFollowsPeoplePersonIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/people/{person_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUserFollowsPeoplePersonIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.personFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserFollowsShowsShowId - Follow a show
  **/
  putUserFollowsShowsShowId(
    req: operations.PutUserFollowsShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserFollowsShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserFollowsShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUserFollowsShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserFollowsWebchannelsWebchannelId - Follow a webchannel
  **/
  putUserFollowsWebchannelsWebchannelId(
    req: operations.PutUserFollowsWebchannelsWebchannelIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserFollowsWebchannelsWebchannelIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserFollowsWebchannelsWebchannelIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/follows/webchannels/{webchannel_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUserFollowsWebchannelsWebchannelIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webchannelFollow = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserTagsTagIdShowsShowId - Tag a show
  **/
  putUserTagsTagIdShowsShowId(
    req: operations.PutUserTagsTagIdShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserTagsTagIdShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserTagsTagIdShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/tags/{tag_id}/shows/{show_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUserTagsTagIdShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagInstance = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserVotesEpisodesEpisodeId - Vote for an episode
  **/
  putUserVotesEpisodesEpisodeId(
    req: operations.PutUserVotesEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserVotesEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserVotesEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/episodes/{episode_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutUserVotesEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.episodeVote = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putUserVotesShowsShowId - Vote for a show
   *
   * Set `voted_at` to `NULL` or leave it out to use the current time.
  **/
  putUserVotesShowsShowId(
    req: operations.PutUserVotesShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUserVotesShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUserVotesShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/votes/shows/{show_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PutUserVotesShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.showVote = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
