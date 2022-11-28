import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
    deviceId?: string;
    positionMs: number;
}
export declare class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSeekToPositionInCurrentlyPlayingTrackRequest extends SpeakeasyBase {
    queryParams: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams;
    headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders;
    security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity;
}
export declare class EndpointSeekToPositionInCurrentlyPlayingTrackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
