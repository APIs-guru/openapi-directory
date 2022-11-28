import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsAddMemberPathParams extends SpeakeasyBase {
    groupObjectId: string;
    tenantId: string;
}
export declare class GroupsAddMemberQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsAddMemberRequests extends SpeakeasyBase {
    groupAddMemberParameters?: Map<string, Map<string, any>>;
    groupAddMemberParameters1?: Map<string, Map<string, any>>;
}
export declare class GroupsAddMemberRequest extends SpeakeasyBase {
    pathParams: GroupsAddMemberPathParams;
    queryParams: GroupsAddMemberQueryParams;
    request: GroupsAddMemberRequests;
}
export declare class GroupsAddMemberResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
