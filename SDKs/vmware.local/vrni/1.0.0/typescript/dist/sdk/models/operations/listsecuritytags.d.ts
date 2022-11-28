import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityTagsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListSecurityTagsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListSecurityTagsRequest extends SpeakeasyBase {
    queryParams: ListSecurityTagsQueryParams;
    security: ListSecurityTagsSecurity;
}
export declare class ListSecurityTagsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
