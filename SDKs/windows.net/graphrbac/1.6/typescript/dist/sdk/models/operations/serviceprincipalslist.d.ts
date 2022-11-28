import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class ServicePrincipalsListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class ServicePrincipalsListRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListPathParams;
    queryParams: ServicePrincipalsListQueryParams;
}
export declare class ServicePrincipalsListResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    servicePrincipalListResult?: shared.ServicePrincipalListResult;
    statusCode: number;
}
