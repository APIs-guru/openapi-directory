import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDistributedVirtualSwitchesQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListDistributedVirtualSwitchesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListDistributedVirtualSwitchesRequest extends SpeakeasyBase {
    queryParams: ListDistributedVirtualSwitchesQueryParams;
    security: ListDistributedVirtualSwitchesSecurity;
}
export declare class ListDistributedVirtualSwitchesResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
