import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetAnswersSortEnum;
    todate?: number;
}
export declare class GetAnswersRequest extends SpeakeasyBase {
    queryParams: GetAnswersQueryParams;
}
export declare class GetAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
