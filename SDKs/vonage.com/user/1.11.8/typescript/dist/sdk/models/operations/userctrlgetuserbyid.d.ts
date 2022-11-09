import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UserCtrlGetUserByIdPathParams extends SpeakeasyBase {
    accountId: string;
    userId: number;
}
export declare class UserCtrlGetUserByIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UserCtrlGetUserByIdRequest extends SpeakeasyBase {
    pathParams: UserCtrlGetUserByIdPathParams;
    security: UserCtrlGetUserByIdSecurity;
}
export declare class UserCtrlGetUserByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userHalResponse?: shared.UserHalResponse;
}
