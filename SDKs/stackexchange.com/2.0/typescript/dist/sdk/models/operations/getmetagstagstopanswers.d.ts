import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeTagsTagsTopAnswersPathParams extends SpeakeasyBase {
    tags: string;
}
export declare enum GetMeTagsTagsTopAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeTagsTagsTopAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeTagsTagsTopAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeTagsTagsTopAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeTagsTagsTopAnswersSortEnum;
    todate?: number;
}
export declare class GetMeTagsTagsTopAnswersRequest extends SpeakeasyBase {
    pathParams: GetMeTagsTagsTopAnswersPathParams;
    queryParams: GetMeTagsTagsTopAnswersQueryParams;
}
export declare class GetMeTagsTagsTopAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
