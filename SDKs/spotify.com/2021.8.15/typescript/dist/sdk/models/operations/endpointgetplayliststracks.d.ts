import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetPlaylistsTracksPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointGetPlaylistsTracksQueryParams extends SpeakeasyBase {
    additionalTypes?: string;
    fields?: string;
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetPlaylistsTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetPlaylistsTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetPlaylistsTracks200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.PlaylistTrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetPlaylistsTracksRequest extends SpeakeasyBase {
    pathParams: EndpointGetPlaylistsTracksPathParams;
    queryParams: EndpointGetPlaylistsTracksQueryParams;
    headers: EndpointGetPlaylistsTracksHeaders;
    security: EndpointGetPlaylistsTracksSecurity;
}
export declare class EndpointGetPlaylistsTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetPlaylistsTracks200ApplicationJsonObject?: EndpointGetPlaylistsTracks200ApplicationJson;
}
