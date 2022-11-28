import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumCustomThumbnailPathParams extends SpeakeasyBase {
    albumId: number;
    thumbnailId: number;
    userId: number;
}
export declare class GetAlbumCustomThumbnailRequest extends SpeakeasyBase {
    pathParams: GetAlbumCustomThumbnailPathParams;
}
export declare class GetAlbumCustomThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
