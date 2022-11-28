import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProblemEventsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListProblemEventsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListProblemEventsRequest extends SpeakeasyBase {
    queryParams: ListProblemEventsQueryParams;
    security: ListProblemEventsSecurity;
}
export declare class ListProblemEventsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
