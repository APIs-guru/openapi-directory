import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckCategoryForVideoPathParams extends SpeakeasyBase {
    category: string;
    videoId: number;
}
export declare class CheckCategoryForVideoRequest extends SpeakeasyBase {
    pathParams: CheckCategoryForVideoPathParams;
}
export declare class CheckCategoryForVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
