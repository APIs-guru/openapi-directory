import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class GroupsListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class GroupsListRequest extends SpeakeasyBase {
    pathParams: GroupsListPathParams;
    queryParams: GroupsListQueryParams;
}
export declare class GroupsListResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    groupListResult?: shared.GroupListResult;
    statusCode: number;
}
