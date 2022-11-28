import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SearchVideosFilterEnum {
    Cc = "CC",
    CcBy = "CC-BY",
    CcByNc = "CC-BY-NC",
    CcByNcNd = "CC-BY-NC-ND",
    CcByNcSa = "CC-BY-NC-SA",
    CcByNd = "CC-BY-ND",
    CcBySa = "CC-BY-SA",
    Cc0 = "CC0",
    Categories = "categories",
    Duration = "duration",
    InProgress = "in-progress",
    MinimumLikes = "minimum_likes",
    Trending = "trending",
    UploadDate = "upload_date"
}
export declare enum SearchVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}
export declare class SearchVideosQueryParams extends SpeakeasyBase {
    direction?: SearchVideosDirectionEnum;
    filter?: SearchVideosFilterEnum;
    links?: string;
    page?: number;
    perPage?: number;
    query: string;
    sort?: SearchVideosSortEnum;
    uris?: string;
}
export declare class SearchVideosRequest extends SpeakeasyBase {
    queryParams: SearchVideosQueryParams;
}
export declare class SearchVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
