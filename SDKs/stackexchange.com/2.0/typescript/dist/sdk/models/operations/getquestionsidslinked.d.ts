import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsLinkedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetQuestionsIdsLinkedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsIdsLinkedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Rank = "rank"
}
export declare class GetQuestionsIdsLinkedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsIdsLinkedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsIdsLinkedSortEnum;
    todate?: number;
}
export declare class GetQuestionsIdsLinkedRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsLinkedPathParams;
    queryParams: GetQuestionsIdsLinkedQueryParams;
}
export declare class GetQuestionsIdsLinkedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
