import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetCurrentUsersProfileHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetCurrentUsersProfileSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetCurrentUsersProfileRequest extends SpeakeasyBase {
    headers: EndpointGetCurrentUsersProfileHeaders;
    security: EndpointGetCurrentUsersProfileSecurity;
}
export declare class EndpointGetCurrentUsersProfileResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    privateUserObject?: shared.PrivateUserObject;
    statusCode: number;
}
