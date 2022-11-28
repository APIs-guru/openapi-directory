import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersProfilePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class EndpointGetUsersProfileHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersProfileSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetUsersProfileRequest extends SpeakeasyBase {
    pathParams: EndpointGetUsersProfilePathParams;
    headers: EndpointGetUsersProfileHeaders;
    security: EndpointGetUsersProfileSecurity;
}
export declare class EndpointGetUsersProfileResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    publicUserObject?: shared.PublicUserObject;
    statusCode: number;
}
