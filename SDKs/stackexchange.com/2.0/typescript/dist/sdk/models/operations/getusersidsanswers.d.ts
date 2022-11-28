import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsAnswersPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdsAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsAnswersSortEnum;
    todate?: number;
}
export declare class GetUsersIdsAnswersRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsAnswersPathParams;
    queryParams: GetUsersIdsAnswersQueryParams;
}
export declare class GetUsersIdsAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
