import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
}
export declare class GetAlbumAlt1Request extends SpeakeasyBase {
    pathParams: GetAlbumAlt1PathParams;
}
export declare class GetAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
