import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsQuestionsFeaturedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsQuestionsFeaturedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsQuestionsFeaturedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsQuestionsFeaturedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsQuestionsFeaturedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsQuestionsFeaturedSortEnum;
    todate?: number;
}
export declare class GetUsersIdsQuestionsFeaturedRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsQuestionsFeaturedPathParams;
    queryParams: GetUsersIdsQuestionsFeaturedQueryParams;
}
export declare class GetUsersIdsQuestionsFeaturedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
