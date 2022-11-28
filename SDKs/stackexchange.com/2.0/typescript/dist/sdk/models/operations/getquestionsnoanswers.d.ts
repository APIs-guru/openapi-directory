import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetQuestionsNoAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsNoAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsNoAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsNoAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsNoAnswersSortEnum;
    tagged?: string;
    todate?: number;
}
export declare class GetQuestionsNoAnswersRequest extends SpeakeasyBase {
    queryParams: GetQuestionsNoAnswersQueryParams;
}
export declare class GetQuestionsNoAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
