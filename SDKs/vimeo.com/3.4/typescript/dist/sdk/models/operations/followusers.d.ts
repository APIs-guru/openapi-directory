import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FollowUsersPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class FollowUsersRequestBody extends SpeakeasyBase {
    users: string[];
}
export declare class FollowUsersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FollowUsersRequest extends SpeakeasyBase {
    pathParams: FollowUsersPathParams;
    request: FollowUsersRequestBody;
    security: FollowUsersSecurity;
}
export declare class FollowUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
