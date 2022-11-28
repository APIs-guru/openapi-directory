import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetVideoAsAlbumThumbnailAlt1PathParams extends SpeakeasyBase {
    albumId: number;
    videoId: number;
}
export declare class SetVideoAsAlbumThumbnailAlt1RequestBody extends SpeakeasyBase {
    timeCode?: number;
}
export declare class SetVideoAsAlbumThumbnailAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SetVideoAsAlbumThumbnailAlt1Request extends SpeakeasyBase {
    pathParams: SetVideoAsAlbumThumbnailAlt1PathParams;
    request?: SetVideoAsAlbumThumbnailAlt1RequestBody;
    security: SetVideoAsAlbumThumbnailAlt1Security;
}
export declare class SetVideoAsAlbumThumbnailAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    error?: shared.Error;
}
