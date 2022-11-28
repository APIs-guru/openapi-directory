import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNsxManagersQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListNsxManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListNsxManagersRequest extends SpeakeasyBase {
    queryParams: ListNsxManagersQueryParams;
    security: ListNsxManagersSecurity;
}
export declare class ListNsxManagersResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
