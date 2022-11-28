import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsQuestionsNoAnswersPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsQuestionsNoAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsQuestionsNoAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsQuestionsNoAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsQuestionsNoAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsQuestionsNoAnswersSortEnum;
    todate?: number;
}
export declare class GetUsersIdsQuestionsNoAnswersRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsQuestionsNoAnswersPathParams;
    queryParams: GetUsersIdsQuestionsNoAnswersQueryParams;
}
export declare class GetUsersIdsQuestionsNoAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
