import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserCtrlGetUsersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class UserCtrlGetUsersQueryParams extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    loginName?: string;
    page?: number;
    pageSize?: number;
}
export declare class UserCtrlGetUsersSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UserCtrlGetUsersRequest extends SpeakeasyBase {
    pathParams: UserCtrlGetUsersPathParams;
    queryParams: UserCtrlGetUsersQueryParams;
    security: UserCtrlGetUsersSecurity;
}
export declare class UserCtrlGetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usersHalResponse?: shared.UsersHalResponse;
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
