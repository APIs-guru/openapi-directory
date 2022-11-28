import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsQuestionsUnacceptedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsQuestionsUnacceptedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsQuestionsUnacceptedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsQuestionsUnacceptedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsQuestionsUnacceptedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsQuestionsUnacceptedSortEnum;
    todate?: number;
}
export declare class GetUsersIdsQuestionsUnacceptedRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsQuestionsUnacceptedPathParams;
    queryParams: GetUsersIdsQuestionsUnacceptedQueryParams;
}
export declare class GetUsersIdsQuestionsUnacceptedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
