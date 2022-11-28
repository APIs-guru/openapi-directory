import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoThumbnailPathParams extends SpeakeasyBase {
    pictureId: number;
    videoId: number;
}
export declare class GetVideoThumbnailRequest extends SpeakeasyBase {
    pathParams: GetVideoThumbnailPathParams;
}
export declare class GetVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
