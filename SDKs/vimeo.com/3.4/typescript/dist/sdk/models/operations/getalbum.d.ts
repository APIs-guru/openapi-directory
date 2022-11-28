import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class GetAlbumRequest extends SpeakeasyBase {
    pathParams: GetAlbumPathParams;
}
export declare class GetAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
