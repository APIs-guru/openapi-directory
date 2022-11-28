import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListKeyCredentialsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsListKeyCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsListKeyCredentialsRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListKeyCredentialsPathParams;
    queryParams: ServicePrincipalsListKeyCredentialsQueryParams;
}
export declare class ServicePrincipalsListKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    keyCredentialListResult?: shared.KeyCredentialListResult;
    statusCode: number;
}
