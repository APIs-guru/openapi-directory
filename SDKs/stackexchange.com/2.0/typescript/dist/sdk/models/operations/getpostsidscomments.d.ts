import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsIdsCommentsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetPostsIdsCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetPostsIdsCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetPostsIdsCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetPostsIdsCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetPostsIdsCommentsSortEnum;
    todate?: number;
}
export declare class GetPostsIdsCommentsRequest extends SpeakeasyBase {
    pathParams: GetPostsIdsCommentsPathParams;
    queryParams: GetPostsIdsCommentsQueryParams;
}
export declare class GetPostsIdsCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
