import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeMentionedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeMentionedSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeMentionedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeMentionedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeMentionedSortEnum;
    todate?: number;
}
export declare class GetMeMentionedRequest extends SpeakeasyBase {
    queryParams: GetMeMentionedQueryParams;
}
export declare class GetMeMentionedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
