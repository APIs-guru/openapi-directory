import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsListOwnersPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsListOwnersQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsListOwnersRequest extends SpeakeasyBase {
    pathParams: ApplicationsListOwnersPathParams;
    queryParams: ApplicationsListOwnersQueryParams;
}
export declare class ApplicationsListOwnersResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    graphError?: shared.GraphError;
    statusCode: number;
}
