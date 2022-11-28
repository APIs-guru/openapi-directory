import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsIsMemberOfPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class GroupsIsMemberOfQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsIsMemberOfRequests extends SpeakeasyBase {
    checkGroupMembershipParameters?: Map<string, Map<string, any>>;
    checkGroupMembershipParameters1?: Map<string, Map<string, any>>;
}
export declare class GroupsIsMemberOfRequest extends SpeakeasyBase {
    pathParams: GroupsIsMemberOfPathParams;
    queryParams: GroupsIsMemberOfQueryParams;
    request: GroupsIsMemberOfRequests;
}
export declare class GroupsIsMemberOfResponse extends SpeakeasyBase {
    checkGroupMembershipResult?: Map<string, Map<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
