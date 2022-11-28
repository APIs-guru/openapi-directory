import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsCommentsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetQuestionsIdsCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetQuestionsIdsCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetQuestionsIdsCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetQuestionsIdsCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetQuestionsIdsCommentsSortEnum;
    todate?: number;
}
export declare class GetQuestionsIdsCommentsRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsCommentsPathParams;
    queryParams: GetQuestionsIdsCommentsQueryParams;
}
export declare class GetQuestionsIdsCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
