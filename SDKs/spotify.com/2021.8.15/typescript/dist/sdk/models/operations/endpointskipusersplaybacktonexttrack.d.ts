import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSkipUsersPlaybackToNextTrackQueryParams extends SpeakeasyBase {
    deviceId?: string;
}
export declare class EndpointSkipUsersPlaybackToNextTrackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSkipUsersPlaybackToNextTrackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSkipUsersPlaybackToNextTrackRequest extends SpeakeasyBase {
    queryParams: EndpointSkipUsersPlaybackToNextTrackQueryParams;
    headers: EndpointSkipUsersPlaybackToNextTrackHeaders;
    security: EndpointSkipUsersPlaybackToNextTrackSecurity;
}
export declare class EndpointSkipUsersPlaybackToNextTrackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
