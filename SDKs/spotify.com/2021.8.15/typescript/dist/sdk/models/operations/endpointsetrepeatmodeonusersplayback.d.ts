import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSetRepeatModeOnUsersPlaybackQueryParams extends SpeakeasyBase {
    deviceId?: string;
    state: string;
}
export declare class EndpointSetRepeatModeOnUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSetRepeatModeOnUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSetRepeatModeOnUsersPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointSetRepeatModeOnUsersPlaybackQueryParams;
    headers: EndpointSetRepeatModeOnUsersPlaybackHeaders;
    security: EndpointSetRepeatModeOnUsersPlaybackSecurity;
}
export declare class EndpointSetRepeatModeOnUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
