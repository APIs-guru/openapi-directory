import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFromWatchHistoryPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class DeleteFromWatchHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteFromWatchHistoryRequest extends SpeakeasyBase {
    pathParams: DeleteFromWatchHistoryPathParams;
    security: DeleteFromWatchHistorySecurity;
}
export declare class DeleteFromWatchHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
