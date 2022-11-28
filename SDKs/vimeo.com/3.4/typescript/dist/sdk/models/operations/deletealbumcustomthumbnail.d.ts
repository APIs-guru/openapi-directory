import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlbumCustomThumbnailPathParams extends SpeakeasyBase {
    albumId: number;
    thumbnailId: number;
    userId: number;
}
export declare class DeleteAlbumCustomThumbnailSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteAlbumCustomThumbnailRequest extends SpeakeasyBase {
    pathParams: DeleteAlbumCustomThumbnailPathParams;
    security: DeleteAlbumCustomThumbnailSecurity;
}
export declare class DeleteAlbumCustomThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
