import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsUpdatePathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsUpdateRequests extends SpeakeasyBase {
    servicePrincipalUpdateParameters?: shared.ServicePrincipalUpdateParameters;
    servicePrincipalUpdateParameters1?: shared.ServicePrincipalUpdateParameters;
}
export declare class ServicePrincipalsUpdateRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsUpdatePathParams;
    queryParams: ServicePrincipalsUpdateQueryParams;
    request: ServicePrincipalsUpdateRequests;
}
export declare class ServicePrincipalsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
