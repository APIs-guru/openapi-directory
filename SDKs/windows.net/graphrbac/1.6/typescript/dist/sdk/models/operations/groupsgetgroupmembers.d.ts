import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetGroupMembersPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class GroupsGetGroupMembersQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsGetGroupMembersRequest extends SpeakeasyBase {
    pathParams: GroupsGetGroupMembersPathParams;
    queryParams: GroupsGetGroupMembersQueryParams;
}
export declare class GroupsGetGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    graphError?: shared.GraphError;
    statusCode: number;
}
