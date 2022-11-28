import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsUpdatePasswordCredentialsPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsUpdatePasswordCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsUpdatePasswordCredentialsRequests extends SpeakeasyBase {
    passwordCredentialsUpdateParameters?: shared.PasswordCredentialsUpdateParameters;
    passwordCredentialsUpdateParameters1?: shared.PasswordCredentialsUpdateParameters;
}
export declare class ApplicationsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
    pathParams: ApplicationsUpdatePasswordCredentialsPathParams;
    queryParams: ApplicationsUpdatePasswordCredentialsQueryParams;
    request: ApplicationsUpdatePasswordCredentialsRequests;
}
export declare class ApplicationsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
