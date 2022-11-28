import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetMemberGroupsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class GroupsGetMemberGroupsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsGetMemberGroupsRequests extends SpeakeasyBase {
    groupGetMemberGroupsParameters?: Map<string, Map<string, any>>;
    groupGetMemberGroupsParameters1?: Map<string, Map<string, any>>;
}
export declare class GroupsGetMemberGroupsRequest extends SpeakeasyBase {
    pathParams: GroupsGetMemberGroupsPathParams;
    queryParams: GroupsGetMemberGroupsQueryParams;
    request: GroupsGetMemberGroupsRequests;
}
export declare class GroupsGetMemberGroupsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    groupGetMemberGroupsResult?: shared.GroupGetMemberGroupsResult;
    statusCode: number;
}
