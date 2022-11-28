import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletedApplicationsListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class DeletedApplicationsListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class DeletedApplicationsListRequest extends SpeakeasyBase {
    pathParams: DeletedApplicationsListPathParams;
    queryParams: DeletedApplicationsListQueryParams;
}
export declare class DeletedApplicationsListResponse extends SpeakeasyBase {
    applicationListResult?: shared.ApplicationListResult;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
