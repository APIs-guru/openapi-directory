import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSetVolumeForUsersPlaybackQueryParams extends SpeakeasyBase {
    deviceId?: string;
    volumePercent: number;
}
export declare class EndpointSetVolumeForUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSetVolumeForUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSetVolumeForUsersPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointSetVolumeForUsersPlaybackQueryParams;
    headers: EndpointSetVolumeForUsersPlaybackHeaders;
    security: EndpointSetVolumeForUsersPlaybackSecurity;
}
export declare class EndpointSetVolumeForUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
