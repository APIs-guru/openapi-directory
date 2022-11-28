import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserLikedVideoPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class CheckIfUserLikedVideoRequest extends SpeakeasyBase {
    pathParams: CheckIfUserLikedVideoPathParams;
}
export declare class CheckIfUserLikedVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
