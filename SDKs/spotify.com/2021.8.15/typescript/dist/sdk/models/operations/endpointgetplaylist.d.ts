import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointGetPlaylistQueryParams extends SpeakeasyBase {
    additionalTypes?: string;
    fields?: string;
    market?: string;
}
export declare class EndpointGetPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointGetPlaylistPathParams;
    queryParams: EndpointGetPlaylistQueryParams;
    headers: EndpointGetPlaylistHeaders;
    security: EndpointGetPlaylistSecurity;
}
export declare class EndpointGetPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    playlistObject?: shared.PlaylistObject;
    statusCode: number;
}
