import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckIfUserFollowsPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointCheckIfUserFollowsPlaylistQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointCheckIfUserFollowsPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckIfUserFollowsPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckIfUserFollowsPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointCheckIfUserFollowsPlaylistPathParams;
    queryParams: EndpointCheckIfUserFollowsPlaylistQueryParams;
    headers: EndpointCheckIfUserFollowsPlaylistHeaders;
    security: EndpointCheckIfUserFollowsPlaylistSecurity;
}
export declare class EndpointCheckIfUserFollowsPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckIfUserFollowsPlaylist200ApplicationJsonBooleans?: boolean[];
}
