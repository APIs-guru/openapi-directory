import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsTagsSynonymsPathParams extends SpeakeasyBase {
    tags: string;
}
export declare enum GetTagsTagsSynonymsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsTagsSynonymsSortEnum {
    Creation = "creation",
    Applied = "applied",
    Activity = "activity"
}
export declare class GetTagsTagsSynonymsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetTagsTagsSynonymsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsTagsSynonymsSortEnum;
    todate?: number;
}
export declare class GetTagsTagsSynonymsRequest extends SpeakeasyBase {
    pathParams: GetTagsTagsSynonymsPathParams;
    queryParams: GetTagsTagsSynonymsQueryParams;
}
export declare class GetTagsTagsSynonymsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
