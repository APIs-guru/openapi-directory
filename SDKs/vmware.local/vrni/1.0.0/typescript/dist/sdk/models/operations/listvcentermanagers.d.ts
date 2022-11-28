import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVcenterManagersQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListVcenterManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListVcenterManagersRequest extends SpeakeasyBase {
    queryParams: ListVcenterManagersQueryParams;
    security: ListVcenterManagersSecurity;
}
export declare class ListVcenterManagersResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
