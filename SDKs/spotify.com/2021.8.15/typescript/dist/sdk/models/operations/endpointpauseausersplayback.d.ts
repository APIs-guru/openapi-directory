import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointPauseAUsersPlaybackQueryParams extends SpeakeasyBase {
    deviceId?: string;
}
export declare class EndpointPauseAUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointPauseAUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointPauseAUsersPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointPauseAUsersPlaybackQueryParams;
    headers: EndpointPauseAUsersPlaybackHeaders;
    security: EndpointPauseAUsersPlaybackSecurity;
}
export declare class EndpointPauseAUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
