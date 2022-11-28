import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointFollowPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointFollowPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class EndpointFollowPlaylistRequestBody extends SpeakeasyBase {
    public?: boolean;
}
export declare class EndpointFollowPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointFollowPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointFollowPlaylistPathParams;
    headers: EndpointFollowPlaylistHeaders;
    request?: EndpointFollowPlaylistRequestBody;
    security: EndpointFollowPlaylistSecurity;
}
export declare class EndpointFollowPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
