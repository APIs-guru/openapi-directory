import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceGroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListServiceGroupsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListServiceGroupsRequest extends SpeakeasyBase {
    queryParams: ListServiceGroupsQueryParams;
    security: ListServiceGroupsSecurity;
}
export declare class ListServiceGroupsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
