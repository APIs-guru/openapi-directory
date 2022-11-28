import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeQuestionsFeaturedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeQuestionsFeaturedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeQuestionsFeaturedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeQuestionsFeaturedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeQuestionsFeaturedSortEnum;
    todate?: number;
}
export declare class GetMeQuestionsFeaturedRequest extends SpeakeasyBase {
    queryParams: GetMeQuestionsFeaturedQueryParams;
}
export declare class GetMeQuestionsFeaturedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
