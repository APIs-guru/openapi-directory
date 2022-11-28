import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryVideosPathParams extends SpeakeasyBase {
    category: string;
}
export declare enum GetCategoryVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategoryVideosFilterEnum {
    ConditionalFeatured = "conditional_featured",
    Embeddable = "embeddable"
}
export declare enum GetCategoryVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Featured = "featured",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}
export declare class GetCategoryVideosQueryParams extends SpeakeasyBase {
    direction?: GetCategoryVideosDirectionEnum;
    filter?: GetCategoryVideosFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetCategoryVideosSortEnum;
}
export declare class GetCategoryVideosRequest extends SpeakeasyBase {
    pathParams: GetCategoryVideosPathParams;
    queryParams: GetCategoryVideosQueryParams;
}
export declare class GetCategoryVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
