import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAlbumsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAlbumsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Duration = "duration",
    Videos = "videos"
}
export declare class GetAlbumsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetAlbumsAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetAlbumsAlt1SortEnum;
}
export declare class GetAlbumsAlt1Request extends SpeakeasyBase {
    queryParams: GetAlbumsAlt1QueryParams;
}
export declare class GetAlbumsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    albums?: shared.Album[];
    legacyError?: shared.LegacyError;
}
