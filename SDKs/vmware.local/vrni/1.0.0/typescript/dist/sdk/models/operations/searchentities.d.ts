import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchEntitiesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class SearchEntitiesRequest extends SpeakeasyBase {
    request?: shared.SearchRequest;
    security: SearchEntitiesSecurity;
}
export declare class SearchEntitiesResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
}
