import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdPunchInAsManagerPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdPunchInAsManagerRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdPunchInAsManagerPathParams;
}
export declare class PostUsersUserIdPunchInAsManagerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userDutyInfo?: shared.UserDutyInfo;
}
