import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryPersonalization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetUsersTopArtistsAndTracks - Get a User's Top Artists and Tracks
     *
     * Get the current user's top artists or tracks based on calculated affinity.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetUsersTopArtistsAndTracks(req: operations.EndpointGetUsersTopArtistsAndTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetUsersTopArtistsAndTracksResponse>;
}
