import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsPatchPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsPatchQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsPatchRequests extends SpeakeasyBase {
    applicationUpdateParameters?: shared.ApplicationUpdateParameters;
    applicationUpdateParameters1?: shared.ApplicationUpdateParameters;
}
export declare class ApplicationsPatchRequest extends SpeakeasyBase {
    pathParams: ApplicationsPatchPathParams;
    queryParams: ApplicationsPatchQueryParams;
    request: ApplicationsPatchRequests;
}
export declare class ApplicationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
