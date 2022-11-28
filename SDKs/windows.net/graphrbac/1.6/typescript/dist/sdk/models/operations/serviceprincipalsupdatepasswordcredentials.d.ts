import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
    passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;
    passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}
export declare class ServicePrincipalsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsUpdatePasswordCredentialsPathParams;
    queryParams: ServicePrincipalsUpdatePasswordCredentialsQueryParams;
    request: ServicePrincipalsUpdatePasswordCredentialsRequests;
}
export declare class ServicePrincipalsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
