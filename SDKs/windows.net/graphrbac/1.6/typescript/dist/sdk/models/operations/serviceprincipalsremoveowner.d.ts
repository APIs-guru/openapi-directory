import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsRemoveOwnerPathParams extends SpeakeasyBase {
    objectId: string;
    ownerObjectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsRemoveOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsRemoveOwnerRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsRemoveOwnerPathParams;
    queryParams: ServicePrincipalsRemoveOwnerQueryParams;
}
export declare class ServicePrincipalsRemoveOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
