import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToWatchLaterPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class AddVideoToWatchLaterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToWatchLaterRequest extends SpeakeasyBase {
    pathParams: AddVideoToWatchLaterPathParams;
    security: AddVideoToWatchLaterSecurity;
}
export declare class AddVideoToWatchLaterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
