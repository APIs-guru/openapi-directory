import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromWatchLaterPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class DeleteVideoFromWatchLaterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromWatchLaterRequest extends SpeakeasyBase {
    pathParams: DeleteVideoFromWatchLaterPathParams;
    security: DeleteVideoFromWatchLaterSecurity;
}
export declare class DeleteVideoFromWatchLaterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
