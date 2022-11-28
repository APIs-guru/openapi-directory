import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLayer2NetworksQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListLayer2NetworksSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListLayer2NetworksRequest extends SpeakeasyBase {
    queryParams: ListLayer2NetworksQueryParams;
    security: ListLayer2NetworksSecurity;
}
export declare class ListLayer2NetworksResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
