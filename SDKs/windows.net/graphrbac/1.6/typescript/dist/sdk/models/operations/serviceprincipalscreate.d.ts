import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsCreatePathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class ServicePrincipalsCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsCreateRequests extends SpeakeasyBase {
    servicePrincipalCreateParameters?: shared.ServicePrincipalCreateParameters;
    servicePrincipalCreateParameters1?: shared.ServicePrincipalCreateParameters;
}
export declare class ServicePrincipalsCreateRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsCreatePathParams;
    queryParams: ServicePrincipalsCreateQueryParams;
    request: ServicePrincipalsCreateRequests;
}
export declare class ServicePrincipalsCreateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    servicePrincipal?: Map<string, Map<string, any>>;
    statusCode: number;
}
