import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAListOfCurrentUsersPlaylistsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class EndpointGetAListOfCurrentUsersPlaylistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAListOfCurrentUsersPlaylistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SimplifiedPlaylistObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetAListOfCurrentUsersPlaylistsRequest extends SpeakeasyBase {
    queryParams: EndpointGetAListOfCurrentUsersPlaylistsQueryParams;
    headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders;
    security: EndpointGetAListOfCurrentUsersPlaylistsSecurity;
}
export declare class EndpointGetAListOfCurrentUsersPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject?: EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson;
}
