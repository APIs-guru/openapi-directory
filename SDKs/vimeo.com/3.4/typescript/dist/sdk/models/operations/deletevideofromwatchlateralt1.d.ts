import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromWatchLaterAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class DeleteVideoFromWatchLaterAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromWatchLaterAlt1Request extends SpeakeasyBase {
    pathParams: DeleteVideoFromWatchLaterAlt1PathParams;
    security: DeleteVideoFromWatchLaterAlt1Security;
}
export declare class DeleteVideoFromWatchLaterAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
