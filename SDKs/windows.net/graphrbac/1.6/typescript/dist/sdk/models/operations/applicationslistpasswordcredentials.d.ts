import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsListPasswordCredentialsPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsListPasswordCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsListPasswordCredentialsRequest extends SpeakeasyBase {
    pathParams: ApplicationsListPasswordCredentialsPathParams;
    queryParams: ApplicationsListPasswordCredentialsQueryParams;
}
export declare class ApplicationsListPasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    passwordCredentialListResult?: shared.PasswordCredentialListResult;
    statusCode: number;
}
