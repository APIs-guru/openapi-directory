import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckWatchLaterQueueAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CheckWatchLaterQueueAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckWatchLaterQueueAlt1Request extends SpeakeasyBase {
    pathParams: CheckWatchLaterQueueAlt1PathParams;
    security: CheckWatchLaterQueueAlt1Security;
}
export declare class CheckWatchLaterQueueAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
