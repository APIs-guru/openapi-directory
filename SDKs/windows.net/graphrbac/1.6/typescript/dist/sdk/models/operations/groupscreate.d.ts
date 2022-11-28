import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsCreatePathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class GroupsCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsCreateRequests extends SpeakeasyBase {
    groupCreateParameters?: Map<string, Map<string, any>>;
    groupCreateParameters1?: Map<string, Map<string, any>>;
}
export declare class GroupsCreateRequest extends SpeakeasyBase {
    pathParams: GroupsCreatePathParams;
    queryParams: GroupsCreateQueryParams;
    request: GroupsCreateRequests;
}
export declare class GroupsCreateResponse extends SpeakeasyBase {
    adGroup?: Map<string, Map<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
