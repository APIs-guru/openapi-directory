import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCreatePlaylistPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class EndpointCreatePlaylistHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointCreatePlaylistRequestBody extends SpeakeasyBase {
    collaborative?: boolean;
    description?: string;
    name: string;
    public?: boolean;
}
export declare class EndpointCreatePlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCreatePlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointCreatePlaylistPathParams;
    headers: EndpointCreatePlaylistHeaders;
    request: EndpointCreatePlaylistRequestBody;
    security: EndpointCreatePlaylistSecurity;
}
export declare class EndpointCreatePlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    playlistObject?: shared.PlaylistObject;
    statusCode: number;
}
