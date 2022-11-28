import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryLibrary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointCheckUsersSavedAlbums - Check User's Saved Albums
     *
     * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-albums - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckUsersSavedAlbums(req: operations.EndpointCheckUsersSavedAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckUsersSavedAlbumsResponse>;
    /**
     * endpointCheckUsersSavedEpisodes - Check User's Saved Episodes
     *
     * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
     *
     * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-episodes - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckUsersSavedEpisodes(req: operations.EndpointCheckUsersSavedEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckUsersSavedEpisodesResponse>;
    /**
     * endpointCheckUsersSavedShows - Check User's Saved Shows
     *
     * Check if one or more shows is already saved in the current Spotify user's library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-shows - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckUsersSavedShows(req: operations.EndpointCheckUsersSavedShowsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckUsersSavedShowsResponse>;
    /**
     * endpointCheckUsersSavedTracks - Check User's Saved Tracks
     *
     * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointCheckUsersSavedTracks(req: operations.EndpointCheckUsersSavedTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointCheckUsersSavedTracksResponse>;
    /**
     * endpointGetUsersSavedAlbums - Get User's Saved Albums
     *
     * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-albums - Find more info on the official Spotify Web API Reference
    **/
    endpointGetUsersSavedAlbums(req: operations.EndpointGetUsersSavedAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetUsersSavedAlbumsResponse>;
    /**
     * endpointGetUsersSavedEpisodes - Get User's Saved Episodes
     *
     * Get a list of the episodes saved in the current Spotify user's library.
     *
     * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-episodes - Find more info on the official Spotify Web API Reference
    **/
    endpointGetUsersSavedEpisodes(req: operations.EndpointGetUsersSavedEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetUsersSavedEpisodesResponse>;
    /**
     * endpointGetUsersSavedShows - Get User's Saved Shows
     *
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-shows - Find more info on the official Spotify Web API Reference
    **/
    endpointGetUsersSavedShows(req: operations.EndpointGetUsersSavedShowsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetUsersSavedShowsResponse>;
    /**
     * endpointGetUsersSavedTracks - Get User's Saved Tracks
     *
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetUsersSavedTracks(req: operations.EndpointGetUsersSavedTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetUsersSavedTracksResponse>;
    /**
     * endpointRemoveAlbumsUser - Remove Albums for Current User
     *
     * Remove one or more albums from the current user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-albums-user - Find more info on the official Spotify Web API Reference
    **/
    endpointRemoveAlbumsUser(req: operations.EndpointRemoveAlbumsUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointRemoveAlbumsUserResponse>;
    /**
     * endpointRemoveEpisodesUser - Remove User's Saved Episodes
     *
     * Remove one or more episodes from the current user's library.
     *
     * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-episodes-user - Find more info on the official Spotify Web API Reference
    **/
    endpointRemoveEpisodesUser(req: operations.EndpointRemoveEpisodesUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointRemoveEpisodesUserResponse>;
    /**
     * endpointRemoveShowsUser - Remove User's Saved Shows
     *
     * Delete one or more shows from current Spotify user's library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-shows-user - Find more info on the official Spotify Web API Reference
    **/
    endpointRemoveShowsUser(req: operations.EndpointRemoveShowsUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointRemoveShowsUserResponse>;
    /**
     * endpointRemoveTracksUser - Remove User's Saved Tracks
     *
     * Remove one or more tracks from the current user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-user - Find more info on the official Spotify Web API Reference
    **/
    endpointRemoveTracksUser(req: operations.EndpointRemoveTracksUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointRemoveTracksUserResponse>;
    /**
     * endpointSaveAlbumsUser - Save Albums for Current User
     *
     * Save one or more albums to the current user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-albums-user - Find more info on the official Spotify Web API Reference
    **/
    endpointSaveAlbumsUser(req: operations.EndpointSaveAlbumsUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSaveAlbumsUserResponse>;
    /**
     * endpointSaveEpisodesUser - Save Episodes for User
     *
     * Save one or more episodes to the current user's library.
     *
     * This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-episodes-user - Find more info on the official Spotify Web API Reference
    **/
    endpointSaveEpisodesUser(req: operations.EndpointSaveEpisodesUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSaveEpisodesUserResponse>;
    /**
     * endpointSaveShowsUser - Save Shows for Current User
     *
     * Save one or more shows to current Spotify user's library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-shows-user - Find more info on the official Spotify Web API Reference
    **/
    endpointSaveShowsUser(req: operations.EndpointSaveShowsUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSaveShowsUserResponse>;
    /**
     * endpointSaveTracksUser - Save Tracks for User
     *
     * Save one or more tracks to the current user's 'Your Music' library.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-tracks-user - Find more info on the official Spotify Web API Reference
    **/
    endpointSaveTracksUser(req: operations.EndpointSaveTracksUserRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSaveTracksUserResponse>;
}
