import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsTagsRelatedPathParams extends SpeakeasyBase {
    tags: string;
}
export declare class GetTagsTagsRelatedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetTagsTagsRelatedRequest extends SpeakeasyBase {
    pathParams: GetTagsTagsRelatedPathParams;
    queryParams: GetTagsTagsRelatedQueryParams;
}
export declare class GetTagsTagsRelatedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
