import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeQuestionsUnansweredOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeQuestionsUnansweredSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeQuestionsUnansweredQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeQuestionsUnansweredOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeQuestionsUnansweredSortEnum;
    todate?: number;
}
export declare class GetMeQuestionsUnansweredRequest extends SpeakeasyBase {
    queryParams: GetMeQuestionsUnansweredQueryParams;
}
export declare class GetMeQuestionsUnansweredResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
