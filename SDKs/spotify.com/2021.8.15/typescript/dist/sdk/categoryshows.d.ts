import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAShow - Get a Show
     *
     * Get Spotify catalog information for a single show identified by its
     * unique Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAShow(req: operations.EndpointGetAShowRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAShowResponse>;
    /**
     * endpointGetAShowsEpisodes - Get a Show's Episodes
     *
     * Get Spotify catalog information about an show's episodes. Optional parameters can be used to limit the number of episodes returned.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAShowsEpisodes(req: operations.EndpointGetAShowsEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAShowsEpisodesResponse>;
    /**
     * endpointGetMultipleShows - Get Multiple Shows
     *
     * Get Spotify catalog information for several shows based on their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows - Find more info on the official Spotify Web API Reference
    **/
    endpointGetMultipleShows(req: operations.EndpointGetMultipleShowsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetMultipleShowsResponse>;
}
