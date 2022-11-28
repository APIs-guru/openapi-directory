import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumVideosPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare enum GetAlbumVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAlbumVideosFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetAlbumVideosSortEnum {
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
export declare class GetAlbumVideosQueryParams extends SpeakeasyBase {
    containingUri?: string;
    direction?: GetAlbumVideosDirectionEnum;
    filter?: GetAlbumVideosFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    password?: string;
    perPage?: number;
    query?: string;
    sort?: GetAlbumVideosSortEnum;
    weakSearch?: boolean;
}
export declare class GetAlbumVideosRequest extends SpeakeasyBase {
    pathParams: GetAlbumVideosPathParams;
    queryParams: GetAlbumVideosQueryParams;
}
export declare class GetAlbumVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
