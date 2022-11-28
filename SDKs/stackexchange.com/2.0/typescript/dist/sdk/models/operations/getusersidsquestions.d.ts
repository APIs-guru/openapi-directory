import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsQuestionsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsQuestionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsQuestionsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsQuestionsSortEnum;
    todate?: number;
}
export declare class GetUsersIdsQuestionsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsQuestionsPathParams;
    queryParams: GetUsersIdsQuestionsQueryParams;
}
export declare class GetUsersIdsQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
