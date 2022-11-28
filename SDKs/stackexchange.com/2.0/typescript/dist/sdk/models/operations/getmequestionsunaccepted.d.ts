import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeQuestionsUnacceptedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeQuestionsUnacceptedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeQuestionsUnacceptedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeQuestionsUnacceptedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeQuestionsUnacceptedSortEnum;
    todate?: number;
}
export declare class GetMeQuestionsUnacceptedRequest extends SpeakeasyBase {
    queryParams: GetMeQuestionsUnacceptedQueryParams;
}
export declare class GetMeQuestionsUnacceptedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
