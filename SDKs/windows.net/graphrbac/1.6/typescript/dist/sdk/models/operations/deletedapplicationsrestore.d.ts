import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletedApplicationsRestorePathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class DeletedApplicationsRestoreQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class DeletedApplicationsRestoreRequest extends SpeakeasyBase {
    pathParams: DeletedApplicationsRestorePathParams;
    queryParams: DeletedApplicationsRestoreQueryParams;
}
export declare class DeletedApplicationsRestoreResponse extends SpeakeasyBase {
    application?: Map<string, Map<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
