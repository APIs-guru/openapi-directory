import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointUnfollowPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointUnfollowPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointUnfollowPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointUnfollowPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointUnfollowPlaylistPathParams;
    headers: EndpointUnfollowPlaylistHeaders;
    security: EndpointUnfollowPlaylistSecurity;
}
export declare class EndpointUnfollowPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
