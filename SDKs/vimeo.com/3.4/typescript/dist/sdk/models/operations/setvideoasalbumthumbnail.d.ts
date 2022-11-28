import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetVideoAsAlbumThumbnailPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
    videoId: number;
}
export declare class SetVideoAsAlbumThumbnailRequestBody extends SpeakeasyBase {
    timeCode?: number;
}
export declare class SetVideoAsAlbumThumbnailSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SetVideoAsAlbumThumbnailRequest extends SpeakeasyBase {
    pathParams: SetVideoAsAlbumThumbnailPathParams;
    request?: SetVideoAsAlbumThumbnailRequestBody;
    security: SetVideoAsAlbumThumbnailSecurity;
}
export declare class SetVideoAsAlbumThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    error?: shared.Error;
}
