import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumVideoPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
    videoId: number;
}
export declare class GetAlbumVideoQueryParams extends SpeakeasyBase {
    password?: string;
}
export declare class GetAlbumVideoRequest extends SpeakeasyBase {
    pathParams: GetAlbumVideoPathParams;
    queryParams: GetAlbumVideoQueryParams;
}
export declare class GetAlbumVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
