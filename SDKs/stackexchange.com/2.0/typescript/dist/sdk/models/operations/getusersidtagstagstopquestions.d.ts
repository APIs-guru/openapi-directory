import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdTagsTagsTopQuestionsPathParams extends SpeakeasyBase {
    id: number;
    tags: string;
}
export declare enum GetUsersIdTagsTagsTopQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdTagsTagsTopQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdTagsTagsTopQuestionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdTagsTagsTopQuestionsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdTagsTagsTopQuestionsSortEnum;
    todate?: number;
}
export declare class GetUsersIdTagsTagsTopQuestionsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTagsTagsTopQuestionsPathParams;
    queryParams: GetUsersIdTagsTagsTopQuestionsQueryParams;
}
export declare class GetUsersIdTagsTagsTopQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
