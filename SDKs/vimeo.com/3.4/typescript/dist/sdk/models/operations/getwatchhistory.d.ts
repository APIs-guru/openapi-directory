import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWatchHistoryQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetWatchHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetWatchHistoryRequest extends SpeakeasyBase {
    queryParams: GetWatchHistoryQueryParams;
    security: GetWatchHistorySecurity;
}
export declare class GetWatchHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
