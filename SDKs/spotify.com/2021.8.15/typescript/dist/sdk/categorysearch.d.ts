import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategorySearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointSearch - Search for an Item
     *
     * Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes
     * that match a keyword string.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-search - Find more info on the official Spotify Web API Reference
    **/
    endpointSearch(req: operations.EndpointSearchRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSearchResponse>;
}
