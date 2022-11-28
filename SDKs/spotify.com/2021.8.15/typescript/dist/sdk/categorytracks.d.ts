import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryTracks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAudioAnalysis - Get Audio Analysis for a Track
     *
     * Get a detailed audio analysis for a single track identified by its unique
     * Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-analysis - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAudioAnalysis(req: operations.EndpointGetAudioAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAudioAnalysisResponse>;
    /**
     * endpointGetAudioFeatures - Get Audio Features for a Track
     *
     * Get audio feature information for a single track identified by its unique
     * Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAudioFeatures(req: operations.EndpointGetAudioFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAudioFeaturesResponse>;
    /**
     * endpointGetSeveralAudioFeatures - Get Audio Features for Several Tracks
     *
     * Get audio features for multiple tracks based on their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features - Find more info on the official Spotify Web API Reference
    **/
    endpointGetSeveralAudioFeatures(req: operations.EndpointGetSeveralAudioFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetSeveralAudioFeaturesResponse>;
    /**
     * endpointGetSeveralTracks - Get Several Tracks
     *
     * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetSeveralTracks(req: operations.EndpointGetSeveralTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetSeveralTracksResponse>;
    /**
     * endpointGetTrack - Get a Track
     *
     * Get Spotify catalog information for a single track identified by its
     * unique Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track - Find more info on the official Spotify Web API Reference
    **/
    endpointGetTrack(req: operations.EndpointGetTrackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetTrackResponse>;
}
