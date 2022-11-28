import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdPunchOutPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdPunchOutRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdPunchOutPathParams;
}
export declare class PostUsersUserIdPunchOutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userDutyInfo?: shared.UserDutyInfo;
}
