import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersSavedEpisodesQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetUsersSavedEpisodesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersSavedEpisodesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetUsersSavedEpisodes200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SavedEpisodeObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetUsersSavedEpisodesRequest extends SpeakeasyBase {
    queryParams: EndpointGetUsersSavedEpisodesQueryParams;
    headers: EndpointGetUsersSavedEpisodesHeaders;
    security: EndpointGetUsersSavedEpisodesSecurity;
}
export declare class EndpointGetUsersSavedEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetUsersSavedEpisodes200ApplicationJsonObject?: EndpointGetUsersSavedEpisodes200ApplicationJson;
}
