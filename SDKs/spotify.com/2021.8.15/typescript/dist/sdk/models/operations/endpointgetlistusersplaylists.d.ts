import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetListUsersPlaylistsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class EndpointGetListUsersPlaylistsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class EndpointGetListUsersPlaylistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetListUsersPlaylistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetListUsersPlaylists200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SimplifiedPlaylistObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetListUsersPlaylistsRequest extends SpeakeasyBase {
    pathParams: EndpointGetListUsersPlaylistsPathParams;
    queryParams: EndpointGetListUsersPlaylistsQueryParams;
    headers: EndpointGetListUsersPlaylistsHeaders;
    security: EndpointGetListUsersPlaylistsSecurity;
}
export declare class EndpointGetListUsersPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetListUsersPlaylists200ApplicationJsonObject?: EndpointGetListUsersPlaylists200ApplicationJson;
}
