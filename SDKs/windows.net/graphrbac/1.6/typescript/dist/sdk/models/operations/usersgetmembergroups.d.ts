import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetMemberGroupsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class UsersGetMemberGroupsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersGetMemberGroupsRequests extends SpeakeasyBase {
    userGetMemberGroupsParameters?: Map<string, Map<string, any>>;
    userGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}
export declare class UsersGetMemberGroupsRequest extends SpeakeasyBase {
    pathParams: UsersGetMemberGroupsPathParams;
    queryParams: UsersGetMemberGroupsQueryParams;
    request: UsersGetMemberGroupsRequests;
}
export declare class UsersGetMemberGroupsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    userGetMemberGroupsResult?: shared.UserGetMemberGroupsResult;
}
