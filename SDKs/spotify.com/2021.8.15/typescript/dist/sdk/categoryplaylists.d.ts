import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryPlaylists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointAddTracksToPlaylist - Add Items to a Playlist
     *
     * Add one or more items to a user's playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointAddTracksToPlaylist(req: operations.EndpointAddTracksToPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointAddTracksToPlaylistResponse>;
    /**
     * endpointChangePlaylistDetails - Change a Playlist's Details
     *
     * Change a playlist's name and public/private state. (The user must, of
     * course, own the playlist.)
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-change-playlist-details - Find more info on the official Spotify Web API Reference
    **/
    endpointChangePlaylistDetails(req: operations.EndpointChangePlaylistDetailsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointChangePlaylistDetailsResponse>;
    /**
     * endpointCreatePlaylist - Create a Playlist
     *
     * Create a playlist for a Spotify user. (The playlist will be empty until
     * you [add tracks](https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist).)
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-create-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointCreatePlaylist(req: operations.EndpointCreatePlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCreatePlaylistResponse>;
    /**
     * endpointGetAListOfCurrentUsersPlaylists - Get a List of Current User's Playlists
     *
     * Get a list of the playlists owned or followed by the current Spotify
     * user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAListOfCurrentUsersPlaylists(req: operations.EndpointGetAListOfCurrentUsersPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAListOfCurrentUsersPlaylistsResponse>;
    /**
     * endpointGetListUsersPlaylists - Get a List of a User's Playlists
     *
     * Get a list of the playlists owned or followed by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetListUsersPlaylists(req: operations.EndpointGetListUsersPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetListUsersPlaylistsResponse>;
    /**
     * endpointGetPlaylist - Get a Playlist
     *
     * Get a playlist owned by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointGetPlaylist(req: operations.EndpointGetPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetPlaylistResponse>;
    /**
     * endpointGetPlaylistCover - Get a Playlist Cover Image
     *
     * Get the current image associated with a specific playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist-cover - Find more info on the official Spotify Web API Reference
    **/
    endpointGetPlaylistCover(req: operations.EndpointGetPlaylistCoverRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetPlaylistCoverResponse>;
    /**
     * endpointGetPlaylistsTracks - Get a Playlist's Items
     *
     * Get full details of the items of a playlist owned by a Spotify user.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetPlaylistsTracks(req: operations.EndpointGetPlaylistsTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetPlaylistsTracksResponse>;
    /**
     * endpointRemoveTracksPlaylist - Remove Items from a Playlist
     *
     * Remove one or more items from a user's playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-playlist - Find more info on the official Spotify Web API Reference
    **/
    endpointRemoveTracksPlaylist(req: operations.EndpointRemoveTracksPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointRemoveTracksPlaylistResponse>;
    /**
     * endpointReorderOrReplacePlaylistsTracks - Reorder or Replace a Playlist's Items
     *
     * Either reorder or replace items in a playlist depending on the request's parameters.
     * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
     * To replace items, include `uris` as either a query parameter or in the request's body.
     * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
     *
     *
     * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
     * These operations can't be applied together in a single request.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointReorderOrReplacePlaylistsTracks(req: operations.EndpointReorderOrReplacePlaylistsTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointReorderOrReplacePlaylistsTracksResponse>;
    /**
     * endpointUploadCustomPlaylistCover - Upload a Custom Playlist Cover Image
     *
     * Replace the image used to represent a specific playlist.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover - Find more info on the official Spotify Web API Reference
    **/
    endpointUploadCustomPlaylistCover(req: operations.EndpointUploadCustomPlaylistCoverRequest, config?: AxiosRequestConfig): Promise<operations.EndpointUploadCustomPlaylistCoverResponse>;
}
