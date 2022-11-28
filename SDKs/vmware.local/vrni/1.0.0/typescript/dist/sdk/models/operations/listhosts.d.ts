import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHostsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListHostsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListHostsRequest extends SpeakeasyBase {
    queryParams: ListHostsQueryParams;
    security: ListHostsSecurity;
}
export declare class ListHostsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
