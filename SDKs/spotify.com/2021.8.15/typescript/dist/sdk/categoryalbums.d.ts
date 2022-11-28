import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryAlbums {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAnAlbum - Get an Album
     *
     * Get Spotify catalog information for a single album.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnAlbum(req: operations.EndpointGetAnAlbumRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnAlbumResponse>;
    /**
     * endpointGetAnAlbumsTracks - Get an Album's Tracks
     *
     * Get Spotify catalog information about an album's tracks.
     * Optional parameters can be used to limit the number of tracks returned.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnAlbumsTracks(req: operations.EndpointGetAnAlbumsTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnAlbumsTracksResponse>;
    /**
     * endpointGetMultipleAlbums - Get Multiple Albums
     *
     * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums - Find more info on the official Spotify Web API Reference
    **/
    endpointGetMultipleAlbums(req: operations.EndpointGetMultipleAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetMultipleAlbumsResponse>;
}
