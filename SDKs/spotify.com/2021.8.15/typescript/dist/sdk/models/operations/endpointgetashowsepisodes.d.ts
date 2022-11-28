import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAShowsEpisodesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAShowsEpisodesQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetAShowsEpisodesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAShowsEpisodesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetAShowsEpisodes200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SimplifiedEpisodeObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetAShowsEpisodesRequest extends SpeakeasyBase {
    pathParams: EndpointGetAShowsEpisodesPathParams;
    queryParams: EndpointGetAShowsEpisodesQueryParams;
    headers: EndpointGetAShowsEpisodesHeaders;
    security: EndpointGetAShowsEpisodesSecurity;
}
export declare class EndpointGetAShowsEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetAShowsEpisodes200ApplicationJsonObject?: EndpointGetAShowsEpisodes200ApplicationJson;
}
