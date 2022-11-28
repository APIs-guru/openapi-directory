import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsMentionedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsMentionedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsMentionedSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsMentionedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsMentionedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsMentionedSortEnum;
    todate?: number;
}
export declare class GetUsersIdsMentionedRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsMentionedPathParams;
    queryParams: GetUsersIdsMentionedQueryParams;
}
export declare class GetUsersIdsMentionedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
