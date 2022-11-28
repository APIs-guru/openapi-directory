import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdTopQuestionTagsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdTopQuestionTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdTopQuestionTagsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTopQuestionTagsPathParams;
    queryParams: GetUsersIdTopQuestionTagsQueryParams;
}
export declare class GetUsersIdTopQuestionTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
