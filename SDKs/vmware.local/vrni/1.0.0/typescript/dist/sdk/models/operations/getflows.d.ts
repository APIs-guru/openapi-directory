import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFlowsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class GetFlowsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFlowsRequest extends SpeakeasyBase {
    queryParams: GetFlowsQueryParams;
    security: GetFlowsSecurity;
}
export declare class GetFlowsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
