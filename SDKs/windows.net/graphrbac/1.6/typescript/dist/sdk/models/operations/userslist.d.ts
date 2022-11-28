import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class UsersListQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarTop?: number;
    apiVersion: string;
}
export declare class UsersListRequest extends SpeakeasyBase {
    pathParams: UsersListPathParams;
    queryParams: UsersListQueryParams;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    userListResult?: shared.UserListResult;
}
