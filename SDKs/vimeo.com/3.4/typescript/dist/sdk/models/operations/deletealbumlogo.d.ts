import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlbumLogoPathParams extends SpeakeasyBase {
    albumId: number;
    logoId: number;
    userId: number;
}
export declare class DeleteAlbumLogoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteAlbumLogoRequest extends SpeakeasyBase {
    pathParams: DeleteAlbumLogoPathParams;
    security: DeleteAlbumLogoSecurity;
}
export declare class DeleteAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
