import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCommentsIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetCommentsIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetCommentsIdsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetCommentsIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetCommentsIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetCommentsIdsSortEnum;
    todate?: number;
}
export declare class GetCommentsIdsRequest extends SpeakeasyBase {
    pathParams: GetCommentsIdsPathParams;
    queryParams: GetCommentsIdsQueryParams;
}
export declare class GetCommentsIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
