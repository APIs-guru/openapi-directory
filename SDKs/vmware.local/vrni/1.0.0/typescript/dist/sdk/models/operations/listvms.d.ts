import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVmsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListVmsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListVmsRequest extends SpeakeasyBase {
    queryParams: ListVmsQueryParams;
    security: ListVmsSecurity;
}
export declare class ListVmsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
