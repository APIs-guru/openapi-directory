import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryBrowse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetACategoriesPlaylists - Get a Category's Playlists
     *
     * Get a list of Spotify playlists tagged with a particular category.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetACategoriesPlaylists(req: operations.EndpointGetACategoriesPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetACategoriesPlaylistsResponse>;
    /**
     * endpointGetACategory - Get a Category
     *
     * Get a single category used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category - Find more info on the official Spotify Web API Reference
    **/
    endpointGetACategory(req: operations.EndpointGetACategoryRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetACategoryResponse>;
    /**
     * endpointGetCategories - Get All Categories
     *
     * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories - Find more info on the official Spotify Web API Reference
    **/
    endpointGetCategories(req: operations.EndpointGetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetCategoriesResponse>;
    /**
     * endpointGetFeaturedPlaylists - Get All Featured Playlists
     *
     * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists - Find more info on the official Spotify Web API Reference
    **/
    endpointGetFeaturedPlaylists(req: operations.EndpointGetFeaturedPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetFeaturedPlaylistsResponse>;
    /**
     * endpointGetNewReleases - Get All New Releases
     *
     * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player's "Browse" tab).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases - Find more info on the official Spotify Web API Reference
    **/
    endpointGetNewReleases(req: operations.EndpointGetNewReleasesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetNewReleasesResponse>;
    /**
     * endpointGetRecommendationGenres - Get Recommendation Genres
     *
     * Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations).
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendation-genres - Find more info on the official Spotify Web API Reference
    **/
    endpointGetRecommendationGenres(req: operations.EndpointGetRecommendationGenresRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetRecommendationGenresResponse>;
    /**
     * endpointGetRecommendations - Get Recommendations
     *
     * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations - Find more info on the official Spotify Web API Reference
    **/
    endpointGetRecommendations(req: operations.EndpointGetRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetRecommendationsResponse>;
}
