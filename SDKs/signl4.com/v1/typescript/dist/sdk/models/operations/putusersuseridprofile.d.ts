import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersUserIdProfilePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PutUsersUserIdProfileRequests extends SpeakeasyBase {
    userProfile?: shared.UserProfile;
    userProfile1?: shared.UserProfile;
    userProfile2?: shared.UserProfile;
    userProfile3?: shared.UserProfile;
}
export declare class PutUsersUserIdProfileRequest extends SpeakeasyBase {
    pathParams: PutUsersUserIdProfilePathParams;
    request?: PutUsersUserIdProfileRequests;
}
export declare class PutUsersUserIdProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userInfo?: shared.UserInfo;
}
