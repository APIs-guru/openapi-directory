import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsDeletePathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsDeleteRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsDeletePathParams;
    queryParams: ServicePrincipalsDeleteQueryParams;
}
export declare class ServicePrincipalsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
