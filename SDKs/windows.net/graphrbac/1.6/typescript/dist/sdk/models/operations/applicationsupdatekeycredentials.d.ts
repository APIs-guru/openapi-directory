import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsUpdateKeyCredentialsPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsUpdateKeyCredentialsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsUpdateKeyCredentialsRequests extends SpeakeasyBase {
    keyCredentialsUpdateParameters?: shared.KeyCredentialsUpdateParameters;
    keyCredentialsUpdateParameters1?: shared.KeyCredentialsUpdateParameters;
}
export declare class ApplicationsUpdateKeyCredentialsRequest extends SpeakeasyBase {
    pathParams: ApplicationsUpdateKeyCredentialsPathParams;
    queryParams: ApplicationsUpdateKeyCredentialsQueryParams;
    request: ApplicationsUpdateKeyCredentialsRequests;
}
export declare class ApplicationsUpdateKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
