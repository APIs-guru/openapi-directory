import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryFollow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointCheckCurrentUserFollows - Get Following State for Artists/Users
     *
     * Check to see if the current user is following one or more artists or other Spotify users.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-current-user-follows - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckCurrentUserFollows(req: operations.EndpointCheckCurrentUserFollowsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckCurrentUserFollowsResponse>;
    /**
     * endpointCheckIfUserFollowsPlaylist - Check if Users Follow a Playlist
     *
     * Check to see if one or more Spotify users are following a specified playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-if-user-follows-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckIfUserFollowsPlaylist(req: operations.EndpointCheckIfUserFollowsPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckIfUserFollowsPlaylistResponse>;
    /**
     * endpointFollowArtistsUsers - Follow Artists or Users
     *
     * Add the current user as a follower of one or more artists or other Spotify users.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-artists-users - Find more info on the official Spotify Web API Reference
    **/
    endpointFollowArtistsUsers(req: operations.EndpointFollowArtistsUsersRequest, config?: AxiosRequestConfig): Promise<operations.EndpointFollowArtistsUsersResponse>;
    /**
     * endpointFollowPlaylist - Follow a Playlist
     *
     * Add the current user as a follower of a playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointFollowPlaylist(req: operations.EndpointFollowPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointFollowPlaylistResponse>;
    /**
     * endpointGetFollowed - Get User's Followed Artists
     *
     * Get the current user's followed artists.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-followed - Find more info on the official Spotify Web API Reference
    **/
    endpointGetFollowed(req: operations.EndpointGetFollowedRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetFollowedResponse>;
    /**
     * endpointUnfollowArtistsUsers - Unfollow Artists or Users
     *
     * Remove the current user as a follower of one or more artists or other Spotify users.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-artists-users - Find more info on the official Spotify Web API Reference
    **/
    endpointUnfollowArtistsUsers(req: operations.EndpointUnfollowArtistsUsersRequest, config?: AxiosRequestConfig): Promise<operations.EndpointUnfollowArtistsUsersResponse>;
    /**
     * endpointUnfollowPlaylist - Unfollow Playlist
     *
     * Remove the current user as a follower of a playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointUnfollowPlaylist(req: operations.EndpointUnfollowPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointUnfollowPlaylistResponse>;
}
