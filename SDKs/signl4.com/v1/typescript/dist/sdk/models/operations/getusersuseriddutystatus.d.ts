import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdDutyStatusPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdDutyStatusRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdDutyStatusPathParams;
}
export declare class GetUsersUserIdDutyStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userDutyInfo?: shared.UserDutyInfo;
}
