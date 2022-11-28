import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupVideoPathParams extends SpeakeasyBase {
    groupId: number;
    videoId: number;
}
export declare class GetGroupVideoRequest extends SpeakeasyBase {
    pathParams: GetGroupVideoPathParams;
}
export declare class GetGroupVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
