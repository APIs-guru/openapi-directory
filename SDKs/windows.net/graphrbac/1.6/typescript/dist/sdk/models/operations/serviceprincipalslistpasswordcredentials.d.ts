import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListPasswordCredentialsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsListPasswordCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsListPasswordCredentialsRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListPasswordCredentialsPathParams;
    queryParams: ServicePrincipalsListPasswordCredentialsQueryParams;
}
export declare class ServicePrincipalsListPasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    passwordCredentialListResult?: shared.PasswordCredentialListResult;
    statusCode: number;
}
