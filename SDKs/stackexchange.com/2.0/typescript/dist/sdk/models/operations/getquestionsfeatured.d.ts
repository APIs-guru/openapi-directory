import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetQuestionsFeaturedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsFeaturedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsFeaturedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsFeaturedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsFeaturedSortEnum;
    tagged?: string;
    todate?: number;
}
export declare class GetQuestionsFeaturedRequest extends SpeakeasyBase {
    queryParams: GetQuestionsFeaturedQueryParams;
}
export declare class GetQuestionsFeaturedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
