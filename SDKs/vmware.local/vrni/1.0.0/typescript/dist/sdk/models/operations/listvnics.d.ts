import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVnicsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListVnicsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListVnicsRequest extends SpeakeasyBase {
    queryParams: ListVnicsQueryParams;
    security: ListVnicsSecurity;
}
export declare class ListVnicsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
