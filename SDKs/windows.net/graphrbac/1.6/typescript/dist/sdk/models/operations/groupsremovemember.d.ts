import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsRemoveMemberPathParams extends SpeakeasyBase {
    groupObjectId: string;
    memberObjectId: string;
    tenantId: string;
}
export declare class GroupsRemoveMemberQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsRemoveMemberRequest extends SpeakeasyBase {
    pathParams: GroupsRemoveMemberPathParams;
    queryParams: GroupsRemoveMemberQueryParams;
}
export declare class GroupsRemoveMemberResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
