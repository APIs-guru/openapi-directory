import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
    videoId: number;
}
export declare class AddVideoToAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToAlbumAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoToAlbumAlt1PathParams;
    security: AddVideoToAlbumAlt1Security;
}
export declare class AddVideoToAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
