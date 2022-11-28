import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeTopAnswerTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeTopAnswerTagsRequest extends SpeakeasyBase {
    queryParams: GetMeTopAnswerTagsQueryParams;
}
export declare class GetMeTopAnswerTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
