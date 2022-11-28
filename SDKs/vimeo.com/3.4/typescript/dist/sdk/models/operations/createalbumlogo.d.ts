import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAlbumLogoPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class CreateAlbumLogoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateAlbumLogoRequest extends SpeakeasyBase {
    pathParams: CreateAlbumLogoPathParams;
    security: CreateAlbumLogoSecurity;
}
export declare class CreateAlbumLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
