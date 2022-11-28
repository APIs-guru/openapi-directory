import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetAlbumsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAlbumsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Duration = "duration",
    Videos = "videos"
}
export declare class GetAlbumsQueryParams extends SpeakeasyBase {
    direction?: GetAlbumsDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetAlbumsSortEnum;
}
export declare class GetAlbumsRequest extends SpeakeasyBase {
    pathParams: GetAlbumsPathParams;
    queryParams: GetAlbumsQueryParams;
}
export declare class GetAlbumsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    albums?: shared.Album[];
    legacyError?: shared.LegacyError;
}
