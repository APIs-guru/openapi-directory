import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsAddOwnerPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class GroupsAddOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsAddOwnerRequests extends SpeakeasyBase {
    addOwnerParameters?: Map<string, Map<string, any>>;
    addOwnerParameters1?: Map<string, Map<string, any>>;
}
export declare class GroupsAddOwnerRequest extends SpeakeasyBase {
    pathParams: GroupsAddOwnerPathParams;
    queryParams: GroupsAddOwnerQueryParams;
    request: GroupsAddOwnerRequests;
}
export declare class GroupsAddOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
