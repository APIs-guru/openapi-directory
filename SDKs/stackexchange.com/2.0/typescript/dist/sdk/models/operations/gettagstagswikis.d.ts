import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsTagsWikisPathParams extends SpeakeasyBase {
    tags: string;
}
export declare class GetTagsTagsWikisQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetTagsTagsWikisRequest extends SpeakeasyBase {
    pathParams: GetTagsTagsWikisPathParams;
    queryParams: GetTagsTagsWikisQueryParams;
}
export declare class GetTagsTagsWikisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
