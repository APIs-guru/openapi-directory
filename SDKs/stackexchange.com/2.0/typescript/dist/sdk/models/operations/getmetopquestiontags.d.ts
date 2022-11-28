import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeTopQuestionTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeTopQuestionTagsRequest extends SpeakeasyBase {
    queryParams: GetMeTopQuestionTagsQueryParams;
}
export declare class GetMeTopQuestionTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
