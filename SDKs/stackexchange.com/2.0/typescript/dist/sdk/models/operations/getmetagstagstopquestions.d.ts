import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeTagsTagsTopQuestionsPathParams extends SpeakeasyBase {
    tags: string;
}
export declare enum GetMeTagsTagsTopQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeTagsTagsTopQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Hot = "hot",
    Week = "week",
    Month = "month",
    Relevance = "relevance"
}
export declare class GetMeTagsTagsTopQuestionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeTagsTagsTopQuestionsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeTagsTagsTopQuestionsSortEnum;
    todate?: number;
}
export declare class GetMeTagsTagsTopQuestionsRequest extends SpeakeasyBase {
    pathParams: GetMeTagsTagsTopQuestionsPathParams;
    queryParams: GetMeTagsTagsTopQuestionsQueryParams;
}
export declare class GetMeTagsTagsTopQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
