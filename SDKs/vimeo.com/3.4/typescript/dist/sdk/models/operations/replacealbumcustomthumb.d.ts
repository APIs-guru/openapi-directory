import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceAlbumCustomThumbPathParams extends SpeakeasyBase {
    albumId: number;
    thumbnailId: number;
    userId: number;
}
export declare class ReplaceAlbumCustomThumbRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class ReplaceAlbumCustomThumbSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class ReplaceAlbumCustomThumbRequest extends SpeakeasyBase {
    pathParams: ReplaceAlbumCustomThumbPathParams;
    request?: ReplaceAlbumCustomThumbRequestBody;
    security: ReplaceAlbumCustomThumbSecurity;
}
export declare class ReplaceAlbumCustomThumbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
