import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIpSetsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListIpSetsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListIpSetsRequest extends SpeakeasyBase {
    queryParams: ListIpSetsQueryParams;
    security: ListIpSetsSecurity;
}
export declare class ListIpSetsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
