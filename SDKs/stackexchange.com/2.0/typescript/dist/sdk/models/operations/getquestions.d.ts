import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Hot = "hot",
    Week = "week",
    Month = "month",
    Relevance = "relevance"
}
export declare class GetQuestionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsSortEnum;
    tagged?: string;
    todate?: number;
}
export declare class GetQuestionsRequest extends SpeakeasyBase {
    queryParams: GetQuestionsQueryParams;
}
export declare class GetQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
