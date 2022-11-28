import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeAnswersSortEnum;
    todate?: number;
}
export declare class GetMeAnswersRequest extends SpeakeasyBase {
    queryParams: GetMeAnswersQueryParams;
}
export declare class GetMeAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
