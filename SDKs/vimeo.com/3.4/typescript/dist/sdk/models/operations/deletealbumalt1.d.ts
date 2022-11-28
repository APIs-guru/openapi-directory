import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
}
export declare class DeleteAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteAlbumAlt1Request extends SpeakeasyBase {
    pathParams: DeleteAlbumAlt1PathParams;
    security: DeleteAlbumAlt1Security;
}
export declare class DeleteAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
