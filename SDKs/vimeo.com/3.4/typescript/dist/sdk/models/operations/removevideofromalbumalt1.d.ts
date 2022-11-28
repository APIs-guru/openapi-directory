import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideoFromAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
    videoId: number;
}
export declare class RemoveVideoFromAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideoFromAlbumAlt1Request extends SpeakeasyBase {
    pathParams: RemoveVideoFromAlbumAlt1PathParams;
    security: RemoveVideoFromAlbumAlt1Security;
}
export declare class RemoveVideoFromAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
