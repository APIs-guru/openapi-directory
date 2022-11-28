import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckWatchLaterQueuePathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class CheckWatchLaterQueueSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckWatchLaterQueueRequest extends SpeakeasyBase {
    pathParams: CheckWatchLaterQueuePathParams;
    security: CheckWatchLaterQueueSecurity;
}
export declare class CheckWatchLaterQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
