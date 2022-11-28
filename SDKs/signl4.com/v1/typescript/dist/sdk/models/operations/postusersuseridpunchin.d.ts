import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdPunchInPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdPunchInRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdPunchInPathParams;
}
export declare class PostUsersUserIdPunchInResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userDutyInfo?: shared.UserDutyInfo;
}
