import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListApplicationsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    queryParams: ListApplicationsQueryParams;
    security: ListApplicationsSecurity;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    pagedListResponse?: shared.PagedListResponse;
    statusCode: number;
}
