import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumVideoAlt1PathParams extends SpeakeasyBase {
    albumId: number;
    videoId: number;
}
export declare class GetAlbumVideoAlt1QueryParams extends SpeakeasyBase {
    password?: string;
}
export declare class GetAlbumVideoAlt1Request extends SpeakeasyBase {
    pathParams: GetAlbumVideoAlt1PathParams;
    queryParams: GetAlbumVideoAlt1QueryParams;
}
export declare class GetAlbumVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
