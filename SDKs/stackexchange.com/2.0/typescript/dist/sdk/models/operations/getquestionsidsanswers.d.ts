import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsAnswersPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetQuestionsIdsAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsIdsAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsIdsAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsIdsAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsIdsAnswersSortEnum;
    todate?: number;
}
export declare class GetQuestionsIdsAnswersRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsAnswersPathParams;
    queryParams: GetQuestionsIdsAnswersQueryParams;
}
export declare class GetQuestionsIdsAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
