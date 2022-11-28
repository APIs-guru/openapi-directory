import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointStartAUsersPlaybackQueryParams extends SpeakeasyBase {
    deviceId?: string;
}
export declare class EndpointStartAUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointStartAUsersPlaybackRequestBody extends SpeakeasyBase {
    contextUri?: string;
    offset?: Map<string, any>;
    positionMs?: number;
    uris?: string[];
}
export declare class EndpointStartAUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointStartAUsersPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointStartAUsersPlaybackQueryParams;
    headers: EndpointStartAUsersPlaybackHeaders;
    request?: EndpointStartAUsersPlaybackRequestBody;
    security: EndpointStartAUsersPlaybackSecurity;
}
export declare class EndpointStartAUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
