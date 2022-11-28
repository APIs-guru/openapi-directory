import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideoFromAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
    videoId: number;
}
export declare class RemoveVideoFromAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideoFromAlbumRequest extends SpeakeasyBase {
    pathParams: RemoveVideoFromAlbumPathParams;
    security: RemoveVideoFromAlbumSecurity;
}
export declare class RemoveVideoFromAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
