import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceVideosInAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
}
export declare class ReplaceVideosInAlbumAlt1RequestBody extends SpeakeasyBase {
    videos: string;
}
export declare class ReplaceVideosInAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class ReplaceVideosInAlbumAlt1Request extends SpeakeasyBase {
    pathParams: ReplaceVideosInAlbumAlt1PathParams;
    request: ReplaceVideosInAlbumAlt1RequestBody;
    security: ReplaceVideosInAlbumAlt1Security;
}
export declare class ReplaceVideosInAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
