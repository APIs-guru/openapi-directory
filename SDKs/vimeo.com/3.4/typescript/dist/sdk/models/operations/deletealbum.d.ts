import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class DeleteAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteAlbumRequest extends SpeakeasyBase {
    pathParams: DeleteAlbumPathParams;
    security: DeleteAlbumSecurity;
}
export declare class DeleteAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
