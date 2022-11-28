import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnfollowUserPathParams extends SpeakeasyBase {
    followUserId: number;
    userId: number;
}
export declare class UnfollowUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnfollowUserRequest extends SpeakeasyBase {
    pathParams: UnfollowUserPathParams;
    security: UnfollowUserSecurity;
}
export declare class UnfollowUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
