import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsGetPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsGetRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsGetPathParams;
    queryParams: ServicePrincipalsGetQueryParams;
}
export declare class ServicePrincipalsGetResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    servicePrincipal?: Map<string, Map<string, any>>;
    statusCode: number;
}
