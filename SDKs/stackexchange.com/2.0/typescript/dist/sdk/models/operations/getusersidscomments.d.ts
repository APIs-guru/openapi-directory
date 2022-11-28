import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsCommentsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsCommentsSortEnum;
    todate?: number;
}
export declare class GetUsersIdsCommentsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsCommentsPathParams;
    queryParams: GetUsersIdsCommentsQueryParams;
}
export declare class GetUsersIdsCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
