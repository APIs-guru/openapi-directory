import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersSavedShowsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class EndpointGetUsersSavedShowsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersSavedShowsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetUsersSavedShows200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SavedShowObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetUsersSavedShowsRequest extends SpeakeasyBase {
    queryParams: EndpointGetUsersSavedShowsQueryParams;
    headers: EndpointGetUsersSavedShowsHeaders;
    security: EndpointGetUsersSavedShowsSecurity;
}
export declare class EndpointGetUsersSavedShowsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetUsersSavedShows200ApplicationJsonObject?: EndpointGetUsersSavedShows200ApplicationJson;
}
