import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class GroupsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsGetRequest extends SpeakeasyBase {
    pathParams: GroupsGetPathParams;
    queryParams: GroupsGetQueryParams;
}
export declare class GroupsGetResponse extends SpeakeasyBase {
    adGroup?: Map<string, Map<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
