import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsTagsFaqPathParams extends SpeakeasyBase {
    tags: string;
}
export declare class GetTagsTagsFaqQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetTagsTagsFaqRequest extends SpeakeasyBase {
    pathParams: GetTagsTagsFaqPathParams;
    queryParams: GetTagsTagsFaqQueryParams;
}
export declare class GetTagsTagsFaqResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
