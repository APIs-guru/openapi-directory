import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetPostsIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetPostsIdsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetPostsIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetPostsIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetPostsIdsSortEnum;
    todate?: number;
}
export declare class GetPostsIdsRequest extends SpeakeasyBase {
    pathParams: GetPostsIdsPathParams;
    queryParams: GetPostsIdsQueryParams;
}
export declare class GetPostsIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
