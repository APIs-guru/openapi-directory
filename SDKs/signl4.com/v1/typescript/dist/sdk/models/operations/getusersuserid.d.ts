import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPathParams;
}
export declare class GetUsersUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userInfo?: shared.UserInfo;
}
