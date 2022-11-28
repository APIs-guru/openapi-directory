import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
    videoId: number;
}
export declare class AddVideoToAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToAlbumRequest extends SpeakeasyBase {
    pathParams: AddVideoToAlbumPathParams;
    security: AddVideoToAlbumSecurity;
}
export declare class AddVideoToAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
