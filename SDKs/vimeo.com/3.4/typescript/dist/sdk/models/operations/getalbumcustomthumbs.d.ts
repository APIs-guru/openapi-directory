import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumCustomThumbsPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare class GetAlbumCustomThumbsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetAlbumCustomThumbsRequest extends SpeakeasyBase {
    pathParams: GetAlbumCustomThumbsPathParams;
    queryParams: GetAlbumCustomThumbsQueryParams;
}
export declare class GetAlbumCustomThumbsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    pictures?: shared.Picture[];
}
