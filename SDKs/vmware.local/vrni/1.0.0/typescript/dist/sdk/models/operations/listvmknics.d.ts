import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVmknicsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListVmknicsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListVmknicsRequest extends SpeakeasyBase {
    queryParams: ListVmknicsQueryParams;
    security: ListVmknicsSecurity;
}
export declare class ListVmknicsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
