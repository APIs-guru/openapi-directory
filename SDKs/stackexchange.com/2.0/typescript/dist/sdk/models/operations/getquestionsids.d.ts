import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetQuestionsIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsIdsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsIdsSortEnum;
    todate?: number;
}
export declare class GetQuestionsIdsRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsPathParams;
    queryParams: GetQuestionsIdsQueryParams;
}
export declare class GetQuestionsIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
