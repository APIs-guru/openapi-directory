import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWatchHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteWatchHistoryRequest extends SpeakeasyBase {
    security: DeleteWatchHistorySecurity;
}
export declare class DeleteWatchHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
