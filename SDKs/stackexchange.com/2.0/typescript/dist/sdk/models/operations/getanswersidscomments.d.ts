import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnswersIdsCommentsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetAnswersIdsCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetAnswersIdsCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetAnswersIdsCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetAnswersIdsCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetAnswersIdsCommentsSortEnum;
    todate?: number;
}
export declare class GetAnswersIdsCommentsRequest extends SpeakeasyBase {
    pathParams: GetAnswersIdsCommentsPathParams;
    queryParams: GetAnswersIdsCommentsQueryParams;
}
export declare class GetAnswersIdsCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
