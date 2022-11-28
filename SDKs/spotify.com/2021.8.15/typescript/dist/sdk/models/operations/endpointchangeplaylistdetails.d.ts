import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointChangePlaylistDetailsPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointChangePlaylistDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class EndpointChangePlaylistDetailsRequestBody extends SpeakeasyBase {
    collaborative?: boolean;
    description?: string;
    name?: string;
    public?: boolean;
}
export declare class EndpointChangePlaylistDetailsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointChangePlaylistDetailsRequest extends SpeakeasyBase {
    pathParams: EndpointChangePlaylistDetailsPathParams;
    headers: EndpointChangePlaylistDetailsHeaders;
    request?: EndpointChangePlaylistDetailsRequestBody;
    security: EndpointChangePlaylistDetailsSecurity;
}
export declare class EndpointChangePlaylistDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
