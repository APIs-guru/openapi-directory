import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsIdsSuggestedEditsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetPostsIdsSuggestedEditsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetPostsIdsSuggestedEditsSortEnum {
    Creation = "creation",
    Approval = "approval",
    Rejection = "rejection"
}
export declare class GetPostsIdsSuggestedEditsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetPostsIdsSuggestedEditsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetPostsIdsSuggestedEditsSortEnum;
    todate?: number;
}
export declare class GetPostsIdsSuggestedEditsRequest extends SpeakeasyBase {
    pathParams: GetPostsIdsSuggestedEditsPathParams;
    queryParams: GetPostsIdsSuggestedEditsQueryParams;
}
export declare class GetPostsIdsSuggestedEditsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
