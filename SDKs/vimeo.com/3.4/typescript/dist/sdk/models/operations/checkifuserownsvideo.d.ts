import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserOwnsVideoPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class CheckIfUserOwnsVideoRequest extends SpeakeasyBase {
    pathParams: CheckIfUserOwnsVideoPathParams;
}
export declare class CheckIfUserOwnsVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
