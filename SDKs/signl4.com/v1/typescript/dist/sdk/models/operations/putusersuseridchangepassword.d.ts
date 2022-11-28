import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersUserIdChangePasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PutUsersUserIdChangePasswordRequests extends SpeakeasyBase {
    updatePasswordInfo?: shared.UpdatePasswordInfo;
    updatePasswordInfo1?: shared.UpdatePasswordInfo;
    updatePasswordInfo2?: shared.UpdatePasswordInfo;
    updatePasswordInfo3?: shared.UpdatePasswordInfo;
}
export declare class PutUsersUserIdChangePasswordRequest extends SpeakeasyBase {
    pathParams: PutUsersUserIdChangePasswordPathParams;
    request?: PutUsersUserIdChangePasswordRequests;
}
export declare class PutUsersUserIdChangePasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
