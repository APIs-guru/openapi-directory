import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodVideoPathParams extends SpeakeasyBase {
    ondemandId: number;
    videoId: number;
}
export declare class GetVodVideoRequest extends SpeakeasyBase {
    pathParams: GetVodVideoPathParams;
}
export declare class GetVodVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
