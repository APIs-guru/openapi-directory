import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsGetServicePrincipalsIdByAppIdPathParams extends SpeakeasyBase {
    applicationId: string;
    tenantId: string;
}
export declare class ApplicationsGetServicePrincipalsIdByAppIdQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsGetServicePrincipalsIdByAppIdRequest extends SpeakeasyBase {
    pathParams: ApplicationsGetServicePrincipalsIdByAppIdPathParams;
    queryParams: ApplicationsGetServicePrincipalsIdByAppIdQueryParams;
}
export declare class ApplicationsGetServicePrincipalsIdByAppIdResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    servicePrincipalObjectResult?: shared.ServicePrincipalObjectResult;
    statusCode: number;
}
