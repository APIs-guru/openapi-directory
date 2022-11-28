import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsDeletePathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsDeleteRequest extends SpeakeasyBase {
    pathParams: ApplicationsDeletePathParams;
    queryParams: ApplicationsDeleteQueryParams;
}
export declare class ApplicationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
