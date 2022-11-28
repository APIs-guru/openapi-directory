import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetQuestionsUnansweredOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsUnansweredSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsUnansweredQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsUnansweredOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsUnansweredSortEnum;
    tagged?: string;
    todate?: number;
}
export declare class GetQuestionsUnansweredRequest extends SpeakeasyBase {
    queryParams: GetQuestionsUnansweredQueryParams;
}
export declare class GetQuestionsUnansweredResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
