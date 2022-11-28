import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsQuestionsUnansweredPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsQuestionsUnansweredOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsQuestionsUnansweredSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsQuestionsUnansweredQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsQuestionsUnansweredOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsQuestionsUnansweredSortEnum;
    todate?: number;
}
export declare class GetUsersIdsQuestionsUnansweredRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsQuestionsUnansweredPathParams;
    queryParams: GetUsersIdsQuestionsUnansweredQueryParams;
}
export declare class GetUsersIdsQuestionsUnansweredResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
