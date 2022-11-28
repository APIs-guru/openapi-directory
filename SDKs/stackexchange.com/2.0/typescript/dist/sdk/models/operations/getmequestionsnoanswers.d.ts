import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeQuestionsNoAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeQuestionsNoAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeQuestionsNoAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeQuestionsNoAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeQuestionsNoAnswersSortEnum;
    todate?: number;
}
export declare class GetMeQuestionsNoAnswersRequest extends SpeakeasyBase {
    queryParams: GetMeQuestionsNoAnswersQueryParams;
}
export declare class GetMeQuestionsNoAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
