import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoRequest extends SpeakeasyBase {
    pathParams: GetVideoPathParams;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
