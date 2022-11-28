import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsAddOwnerPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsAddOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsAddOwnerRequests extends SpeakeasyBase {
    addOwnerParameters?: Map<string, Map<string, any>>;
    addOwnerParameters1?: Map<string, Map<string, any>>;
}
export declare class ServicePrincipalsAddOwnerRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsAddOwnerPathParams;
    queryParams: ServicePrincipalsAddOwnerQueryParams;
    request: ServicePrincipalsAddOwnerRequests;
}
export declare class ServicePrincipalsAddOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
