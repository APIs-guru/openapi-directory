import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityGroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListSecurityGroupsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: ListSecurityGroupsQueryParams;
    security: ListSecurityGroupsSecurity;
}
export declare class ListSecurityGroupsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
