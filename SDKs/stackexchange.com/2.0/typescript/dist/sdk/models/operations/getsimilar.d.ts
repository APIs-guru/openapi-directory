import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSimilarOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetSimilarSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Relevance = "relevance"
}
export declare class GetSimilarQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    nottagged?: string;
    order?: GetSimilarOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetSimilarSortEnum;
    tagged?: string;
    title?: string;
    todate?: number;
}
export declare class GetSimilarRequest extends SpeakeasyBase {
    queryParams: GetSimilarQueryParams;
}
export declare class GetSimilarResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
