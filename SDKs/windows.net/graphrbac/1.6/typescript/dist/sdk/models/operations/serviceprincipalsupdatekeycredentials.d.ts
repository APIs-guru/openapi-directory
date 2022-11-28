import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsUpdateKeyCredentialsRequests extends SpeakeasyBase {
    keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;
    keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}
export declare class ServicePrincipalsUpdateKeyCredentialsRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsUpdateKeyCredentialsPathParams;
    queryParams: ServicePrincipalsUpdateKeyCredentialsQueryParams;
    request: ServicePrincipalsUpdateKeyCredentialsRequests;
}
export declare class ServicePrincipalsUpdateKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
