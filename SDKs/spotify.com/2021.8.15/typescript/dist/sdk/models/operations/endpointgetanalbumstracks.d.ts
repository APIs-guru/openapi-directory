import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnAlbumsTracksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnAlbumsTracksQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetAnAlbumsTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnAlbumsTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetAnAlbumsTracks200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SimplifiedTrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetAnAlbumsTracksRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnAlbumsTracksPathParams;
    queryParams: EndpointGetAnAlbumsTracksQueryParams;
    headers: EndpointGetAnAlbumsTracksHeaders;
    security: EndpointGetAnAlbumsTracksSecurity;
}
export declare class EndpointGetAnAlbumsTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetAnAlbumsTracks200ApplicationJsonObject?: EndpointGetAnAlbumsTracks200ApplicationJson;
}
