import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPostsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetPostsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetPostsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetPostsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetPostsSortEnum;
    todate?: number;
}
export declare class GetPostsRequest extends SpeakeasyBase {
    queryParams: GetPostsQueryParams;
}
export declare class GetPostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
