import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFoldersQueryParams extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    size?: number;
    startTime?: number;
}
export declare class ListFoldersSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListFoldersRequest extends SpeakeasyBase {
    queryParams: ListFoldersQueryParams;
    security: ListFoldersSecurity;
}
export declare class ListFoldersResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
