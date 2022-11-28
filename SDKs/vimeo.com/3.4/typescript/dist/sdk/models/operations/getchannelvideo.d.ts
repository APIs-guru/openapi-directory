import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelVideoPathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class GetChannelVideoRequest extends SpeakeasyBase {
    pathParams: GetChannelVideoPathParams;
}
export declare class GetChannelVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
