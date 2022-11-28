import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsListKeyCredentialsPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsListKeyCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsListKeyCredentialsRequest extends SpeakeasyBase {
    pathParams: ApplicationsListKeyCredentialsPathParams;
    queryParams: ApplicationsListKeyCredentialsQueryParams;
}
export declare class ApplicationsListKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    keyCredentialListResult?: shared.KeyCredentialListResult;
    statusCode: number;
}
