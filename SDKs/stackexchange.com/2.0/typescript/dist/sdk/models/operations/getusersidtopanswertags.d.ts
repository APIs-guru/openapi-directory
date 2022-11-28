import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdTopAnswerTagsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdTopAnswerTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdTopAnswerTagsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTopAnswerTagsPathParams;
    queryParams: GetUsersIdTopAnswerTagsQueryParams;
}
export declare class GetUsersIdTopAnswerTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
