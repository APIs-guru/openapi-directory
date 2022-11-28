import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupVideosPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare enum GetGroupVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetGroupVideosFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetGroupVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetGroupVideosQueryParams extends SpeakeasyBase {
    direction?: GetGroupVideosDirectionEnum;
    filter?: GetGroupVideosFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetGroupVideosSortEnum;
}
export declare class GetGroupVideosRequest extends SpeakeasyBase {
    pathParams: GetGroupVideosPathParams;
    queryParams: GetGroupVideosQueryParams;
}
export declare class GetGroupVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
