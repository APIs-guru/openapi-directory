import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class ApplicationsListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class ApplicationsListRequest extends SpeakeasyBase {
    pathParams: ApplicationsListPathParams;
    queryParams: ApplicationsListQueryParams;
}
export declare class ApplicationsListResponse extends SpeakeasyBase {
    applicationListResult?: shared.ApplicationListResult;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
