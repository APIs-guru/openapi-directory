import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsCommentsToidPathParams extends SpeakeasyBase {
    ids: string;
    toid: number;
}
export declare enum GetUsersIdsCommentsToidOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsCommentsToidSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsCommentsToidQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsCommentsToidOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsCommentsToidSortEnum;
    todate?: number;
}
export declare class GetUsersIdsCommentsToidRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsCommentsToidPathParams;
    queryParams: GetUsersIdsCommentsToidQueryParams;
}
export declare class GetUsersIdsCommentsToidResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
