import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLikesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetLikesFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetLikesSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetLikesQueryParams extends SpeakeasyBase {
    filter?: GetLikesFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetLikesSortEnum;
}
export declare class GetLikesRequest extends SpeakeasyBase {
    pathParams: GetLikesPathParams;
    queryParams: GetLikesQueryParams;
}
export declare class GetLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
