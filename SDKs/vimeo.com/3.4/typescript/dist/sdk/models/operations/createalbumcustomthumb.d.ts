import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAlbumCustomThumbPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class CreateAlbumCustomThumbSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateAlbumCustomThumbRequest extends SpeakeasyBase {
    pathParams: CreateAlbumCustomThumbPathParams;
    security: CreateAlbumCustomThumbSecurity;
}
export declare class CreateAlbumCustomThumbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
