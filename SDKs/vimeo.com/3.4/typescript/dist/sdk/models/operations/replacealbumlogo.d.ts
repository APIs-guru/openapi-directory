import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceAlbumLogoPathParams extends SpeakeasyBase {
    albumId: number;
    logoId: number;
    userId: number;
}
export declare class ReplaceAlbumLogoRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class ReplaceAlbumLogoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class ReplaceAlbumLogoRequest extends SpeakeasyBase {
    pathParams: ReplaceAlbumLogoPathParams;
    request?: ReplaceAlbumLogoRequestBody;
    security: ReplaceAlbumLogoSecurity;
}
export declare class ReplaceAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
