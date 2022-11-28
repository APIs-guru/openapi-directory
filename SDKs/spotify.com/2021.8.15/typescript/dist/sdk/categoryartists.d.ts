import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryArtists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAnArtist - Get an Artist
     *
     * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artist - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnArtist(req: operations.EndpointGetAnArtistRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnArtistResponse>;
    /**
     * endpointGetAnArtistsAlbums - Get an Artist's Albums
     *
     * Get Spotify catalog information about an artist's albums.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-albums - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnArtistsAlbums(req: operations.EndpointGetAnArtistsAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnArtistsAlbumsResponse>;
    /**
     * endpointGetAnArtistsRelatedArtists - Get an Artist's Related Artists
     *
     * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnArtistsRelatedArtists(req: operations.EndpointGetAnArtistsRelatedArtistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnArtistsRelatedArtistsResponse>;
    /**
     * endpointGetAnArtistsTopTracks - Get an Artist's Top Tracks
     *
     * Get Spotify catalog information about an artist's top tracks by country.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-top-tracks - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAnArtistsTopTracks(req: operations.EndpointGetAnArtistsTopTracksRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAnArtistsTopTracksResponse>;
    /**
     * endpointGetMultipleArtists - Get Multiple Artists
     *
     * Get Spotify catalog information for several artists based on their Spotify IDs.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetMultipleArtists(req: operations.EndpointGetMultipleArtistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetMultipleArtistsResponse>;
}
