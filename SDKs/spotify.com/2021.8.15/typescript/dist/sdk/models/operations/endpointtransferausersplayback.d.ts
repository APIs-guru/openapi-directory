import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointTransferAUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointTransferAUsersPlaybackRequestBody extends SpeakeasyBase {
    deviceIds: string[];
    play?: boolean;
}
export declare class EndpointTransferAUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointTransferAUsersPlaybackRequest extends SpeakeasyBase {
    headers: EndpointTransferAUsersPlaybackHeaders;
    request: EndpointTransferAUsersPlaybackRequestBody;
    security: EndpointTransferAUsersPlaybackSecurity;
}
export declare class EndpointTransferAUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
