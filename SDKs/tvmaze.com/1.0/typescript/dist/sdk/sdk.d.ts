import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.tvmaze.com/v1", "http://api.tvmaze.com/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteUserEpisodesEpisodeId - Unmark an episode
    **/
    deleteUserEpisodesEpisodeId(req: operations.DeleteUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserEpisodesEpisodeIdResponse>;
    /**
     * deleteUserFollowsNetworksNetworkId - Unfollow a network
    **/
    deleteUserFollowsNetworksNetworkId(req: operations.DeleteUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsNetworksNetworkIdResponse>;
    /**
     * deleteUserFollowsPeoplePersonId - Unfollow a person
    **/
    deleteUserFollowsPeoplePersonId(req: operations.DeleteUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsPeoplePersonIdResponse>;
    /**
     * deleteUserFollowsShowsShowId - Unfollow a show
    **/
    deleteUserFollowsShowsShowId(req: operations.DeleteUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsShowsShowIdResponse>;
    /**
     * deleteUserFollowsWebchannelsWebchannelId - Unfollow a webchannel
    **/
    deleteUserFollowsWebchannelsWebchannelId(req: operations.DeleteUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsWebchannelsWebchannelIdResponse>;
    /**
     * deleteUserTagsTagId - Delete a specific tag
    **/
    deleteUserTagsTagId(req: operations.DeleteUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdResponse>;
    /**
     * deleteUserTagsTagIdShowsShowId - Untag a show
    **/
    deleteUserTagsTagIdShowsShowId(req: operations.DeleteUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdShowsShowIdResponse>;
    /**
     * deleteUserVotesEpisodesEpisodeId - Remove an episode vote
    **/
    deleteUserVotesEpisodesEpisodeId(req: operations.DeleteUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesEpisodesEpisodeIdResponse>;
    /**
     * deleteUserVotesShowsShowId - Remove a show vote
    **/
    deleteUserVotesShowsShowId(req: operations.DeleteUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesShowsShowIdResponse>;
    /**
     * getAuthValidate - Validate your authentication credentials
     *
     * If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
    **/
    getAuthValidate(config?: AxiosRequestConfig): Promise<operations.GetAuthValidateResponse>;
    /**
     * getScrobbleShowsShowId - List watched and acquired episodes for a show
     *
     * This endpoint can be used by all users, even without premium
    **/
    getScrobbleShowsShowId(req: operations.GetScrobbleShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScrobbleShowsShowIdResponse>;
    /**
     * getUserEpisodes - List the marked episodes
    **/
    getUserEpisodes(req: operations.GetUserEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesResponse>;
    /**
     * getUserEpisodesEpisodeId - Check if an episode is marked
    **/
    getUserEpisodesEpisodeId(req: operations.GetUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesEpisodeIdResponse>;
    /**
     * getUserFollowsNetworks - List the followed networks
    **/
    getUserFollowsNetworks(req: operations.GetUserFollowsNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksResponse>;
    /**
     * getUserFollowsNetworksNetworkId - Check if a network is followed
    **/
    getUserFollowsNetworksNetworkId(req: operations.GetUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksNetworkIdResponse>;
    /**
     * getUserFollowsPeople - List the followed people
    **/
    getUserFollowsPeople(req: operations.GetUserFollowsPeopleRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsPeopleResponse>;
    /**
     * getUserFollowsPeoplePersonId - Check if a person is followed
    **/
    getUserFollowsPeoplePersonId(req: operations.GetUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsPeoplePersonIdResponse>;
    /**
     * getUserFollowsShows - List the followed shows
    **/
    getUserFollowsShows(req: operations.GetUserFollowsShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsShowsResponse>;
    /**
     * getUserFollowsShowsShowId - Check if a show is followed
    **/
    getUserFollowsShowsShowId(req: operations.GetUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsShowsShowIdResponse>;
    /**
     * getUserFollowsWebchannels - List the followed webchannels
    **/
    getUserFollowsWebchannels(req: operations.GetUserFollowsWebchannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsWebchannelsResponse>;
    /**
     * getUserFollowsWebchannelsWebchannelId - Check if a webchannel is followed
    **/
    getUserFollowsWebchannelsWebchannelId(req: operations.GetUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsWebchannelsWebchannelIdResponse>;
    /**
     * getUserTags - List all tags
    **/
    getUserTags(config?: AxiosRequestConfig): Promise<operations.GetUserTagsResponse>;
    /**
     * getUserTagsTagIdShows - List all shows under this tag
    **/
    getUserTagsTagIdShows(req: operations.GetUserTagsTagIdShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTagsTagIdShowsResponse>;
    /**
     * getUserVotesEpisodes - List the episodes voted for
    **/
    getUserVotesEpisodes(config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesResponse>;
    /**
     * getUserVotesEpisodesEpisodeId - Check if an episode is voted for
    **/
    getUserVotesEpisodesEpisodeId(req: operations.GetUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesEpisodeIdResponse>;
    /**
     * getUserVotesShows - List the shows voted for
    **/
    getUserVotesShows(req: operations.GetUserVotesShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsResponse>;
    /**
     * getUserVotesShowsShowId - Check if a show is voted for
    **/
    getUserVotesShowsShowId(req: operations.GetUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsShowIdResponse>;
    /**
     * patchUserTagsTagId - Update a specific tag
    **/
    patchUserTagsTagId(req: operations.PatchUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserTagsTagIdResponse>;
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
    postAuthPoll(req: operations.PostAuthPollRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthPollResponse>;
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
    postAuthStart(req: operations.PostAuthStartRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthStartResponse>;
    /**
     * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
     *
     * This endpoint can be used by all users, even without premium
    **/
    postScrobbleEpisodes(req: operations.PostScrobbleEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.PostScrobbleEpisodesResponse>;
    /**
     * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
     *
     * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
     *
     * This endpoint can be used by all users, even without premium.
     *
    **/
    postScrobbleShows(req: operations.PostScrobbleShowsRequest, config?: AxiosRequestConfig): Promise<operations.PostScrobbleShowsResponse>;
    /**
     * postUserTags - Create a new tag
    **/
    postUserTags(req: operations.PostUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostUserTagsResponse>;
    /**
     * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
     *
     * This endpoint can be used by all users, even without premium
    **/
    putScrobbleEpisodesEpisodeId(req: operations.PutScrobbleEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutScrobbleEpisodesEpisodeIdResponse>;
    /**
     * putUserEpisodesEpisodeId - Mark an episode
     *
     * Set `marked_at` to `NULL` or leave it out to use the current time.
    **/
    putUserEpisodesEpisodeId(req: operations.PutUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserEpisodesEpisodeIdResponse>;
    /**
     * putUserFollowsNetworksNetworkId - Follow a network
    **/
    putUserFollowsNetworksNetworkId(req: operations.PutUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsNetworksNetworkIdResponse>;
    /**
     * putUserFollowsPeoplePersonId - Follow a person
    **/
    putUserFollowsPeoplePersonId(req: operations.PutUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsPeoplePersonIdResponse>;
    /**
     * putUserFollowsShowsShowId - Follow a show
    **/
    putUserFollowsShowsShowId(req: operations.PutUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsShowsShowIdResponse>;
    /**
     * putUserFollowsWebchannelsWebchannelId - Follow a webchannel
    **/
    putUserFollowsWebchannelsWebchannelId(req: operations.PutUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsWebchannelsWebchannelIdResponse>;
    /**
     * putUserTagsTagIdShowsShowId - Tag a show
    **/
    putUserTagsTagIdShowsShowId(req: operations.PutUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagsTagIdShowsShowIdResponse>;
    /**
     * putUserVotesEpisodesEpisodeId - Vote for an episode
    **/
    putUserVotesEpisodesEpisodeId(req: operations.PutUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesEpisodesEpisodeIdResponse>;
    /**
     * putUserVotesShowsShowId - Vote for a show
     *
     * Set `voted_at` to `NULL` or leave it out to use the current time.
    **/
    putUserVotesShowsShowId(req: operations.PutUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesShowsShowIdResponse>;
}
export {};
