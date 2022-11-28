import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDistributedVirtualPortgroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListDistributedVirtualPortgroupsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListDistributedVirtualPortgroupsRequest extends SpeakeasyBase {
    queryParams: ListDistributedVirtualPortgroupsQueryParams;
    security: ListDistributedVirtualPortgroupsSecurity;
}
export declare class ListDistributedVirtualPortgroupsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
