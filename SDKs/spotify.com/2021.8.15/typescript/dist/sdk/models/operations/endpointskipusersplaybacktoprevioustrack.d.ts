import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSkipUsersPlaybackToPreviousTrackQueryParams extends SpeakeasyBase {
    deviceId?: string;
}
export declare class EndpointSkipUsersPlaybackToPreviousTrackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSkipUsersPlaybackToPreviousTrackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSkipUsersPlaybackToPreviousTrackRequest extends SpeakeasyBase {
    queryParams: EndpointSkipUsersPlaybackToPreviousTrackQueryParams;
    headers: EndpointSkipUsersPlaybackToPreviousTrackHeaders;
    security: EndpointSkipUsersPlaybackToPreviousTrackSecurity;
}
export declare class EndpointSkipUsersPlaybackToPreviousTrackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
