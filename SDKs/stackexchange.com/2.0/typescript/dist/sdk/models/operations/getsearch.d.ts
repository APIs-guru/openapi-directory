import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSearchOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetSearchSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Relevance = "relevance"
}
export declare class GetSearchQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    intitle?: string;
    max?: string;
    min?: string;
    nottagged?: string;
    order?: GetSearchOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetSearchSortEnum;
    tagged?: string;
    todate?: number;
}
export declare class GetSearchRequest extends SpeakeasyBase {
    queryParams: GetSearchQueryParams;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
