import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsRelatedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetQuestionsIdsRelatedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsIdsRelatedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Rank = "rank"
}
export declare class GetQuestionsIdsRelatedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsIdsRelatedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsIdsRelatedSortEnum;
    todate?: number;
}
export declare class GetQuestionsIdsRelatedRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsRelatedPathParams;
    queryParams: GetQuestionsIdsRelatedQueryParams;
}
export declare class GetQuestionsIdsRelatedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
