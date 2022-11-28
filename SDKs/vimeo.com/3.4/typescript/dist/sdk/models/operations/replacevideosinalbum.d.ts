import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceVideosInAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class ReplaceVideosInAlbumRequestBody extends SpeakeasyBase {
    videos: string;
}
export declare class ReplaceVideosInAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class ReplaceVideosInAlbumRequest extends SpeakeasyBase {
    pathParams: ReplaceVideosInAlbumPathParams;
    request: ReplaceVideosInAlbumRequestBody;
    security: ReplaceVideosInAlbumSecurity;
}
export declare class ReplaceVideosInAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
