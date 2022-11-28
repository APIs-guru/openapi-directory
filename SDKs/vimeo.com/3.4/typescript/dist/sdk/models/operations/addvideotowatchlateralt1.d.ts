import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToWatchLaterAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class AddVideoToWatchLaterAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToWatchLaterAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoToWatchLaterAlt1PathParams;
    security: AddVideoToWatchLaterAlt1Security;
}
export declare class AddVideoToWatchLaterAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
