import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeQuestionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeQuestionsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeQuestionsSortEnum;
    todate?: number;
}
export declare class GetMeQuestionsRequest extends SpeakeasyBase {
    queryParams: GetMeQuestionsQueryParams;
}
export declare class GetMeQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
