import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClustersQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListClustersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    queryParams: ListClustersQueryParams;
    security: ListClustersSecurity;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
