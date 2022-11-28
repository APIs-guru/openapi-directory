import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAnEpisode - Get an Episode
     *
     * Get Spotify catalog information for a single episode identified by its
     * unique Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-episode - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnEpisode(req: operations.EndpointGetAnEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnEpisodeResponse>;
    /**
     * endpointGetMultipleEpisodes - Get Multiple Episodes
     *
     * Get Spotify catalog information for several episodes based on their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes - Find more info on the official Spotify Web API Reference
    **/
    endpointGetMultipleEpisodes(req: operations.EndpointGetMultipleEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetMultipleEpisodesResponse>;
}
