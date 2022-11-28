import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppearancesAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAppearancesAlt1FilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetAppearancesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetAppearancesAlt1QueryParams extends SpeakeasyBase {
    direction?: GetAppearancesAlt1DirectionEnum;
    filter?: GetAppearancesAlt1FilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetAppearancesAlt1SortEnum;
}
export declare class GetAppearancesAlt1Request extends SpeakeasyBase {
    queryParams: GetAppearancesAlt1QueryParams;
}
export declare class GetAppearancesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
