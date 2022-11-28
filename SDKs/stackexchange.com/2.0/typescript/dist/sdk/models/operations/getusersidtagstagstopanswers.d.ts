import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdTagsTagsTopAnswersPathParams extends SpeakeasyBase {
    id: number;
    tags: string;
}
export declare enum GetUsersIdTagsTagsTopAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdTagsTagsTopAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}
export declare class GetUsersIdTagsTagsTopAnswersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdTagsTagsTopAnswersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdTagsTagsTopAnswersSortEnum;
    todate?: number;
}
export declare class GetUsersIdTagsTagsTopAnswersRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTagsTagsTopAnswersPathParams;
    queryParams: GetUsersIdTagsTagsTopAnswersQueryParams;
}
export declare class GetUsersIdTagsTagsTopAnswersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
