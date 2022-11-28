import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumVideosAlt1PathParams extends SpeakeasyBase {
    albumId: number;
}
export declare enum GetAlbumVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAlbumVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetAlbumVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    Likes = "likes",
    Manual = "manual",
    ModifiedTime = "modified_time",
    Plays = "plays"
}
export declare class GetAlbumVideosAlt1QueryParams extends SpeakeasyBase {
    containingUri?: string;
    direction?: GetAlbumVideosAlt1DirectionEnum;
    filter?: GetAlbumVideosAlt1FilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    password?: string;
    perPage?: number;
    query?: string;
    sort?: GetAlbumVideosAlt1SortEnum;
    weakSearch?: boolean;
}
export declare class GetAlbumVideosAlt1Request extends SpeakeasyBase {
    pathParams: GetAlbumVideosAlt1PathParams;
    queryParams: GetAlbumVideosAlt1QueryParams;
}
export declare class GetAlbumVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
