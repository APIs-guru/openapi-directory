import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FollowUserPathParams extends SpeakeasyBase {
    followUserId: number;
    userId: number;
}
export declare class FollowUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FollowUserRequest extends SpeakeasyBase {
    pathParams: FollowUserPathParams;
    security: FollowUserSecurity;
}
export declare class FollowUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
