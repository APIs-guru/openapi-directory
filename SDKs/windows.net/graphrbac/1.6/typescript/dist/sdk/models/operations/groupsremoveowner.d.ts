import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsRemoveOwnerPathParams extends SpeakeasyBase {
    objectId: string;
    ownerObjectId: string;
    tenantId: string;
}
export declare class GroupsRemoveOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsRemoveOwnerRequest extends SpeakeasyBase {
    pathParams: GroupsRemoveOwnerPathParams;
    queryParams: GroupsRemoveOwnerQueryParams;
}
export declare class GroupsRemoveOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
