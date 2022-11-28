import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnswersIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetAnswersIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetAnswersIdsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetAnswersIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetAnswersIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetAnswersIdsSortEnum;
    todate?: number;
}
export declare class GetAnswersIdsRequest extends SpeakeasyBase {
    pathParams: GetAnswersIdsPathParams;
    queryParams: GetAnswersIdsQueryParams;
}
export declare class GetAnswersIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
