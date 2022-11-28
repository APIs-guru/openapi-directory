import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsTagsInfoPathParams extends SpeakeasyBase {
    tags: string;
}
export declare enum GetTagsTagsInfoOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsTagsInfoSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetTagsTagsInfoQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetTagsTagsInfoOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsTagsInfoSortEnum;
    todate?: number;
}
export declare class GetTagsTagsInfoRequest extends SpeakeasyBase {
    pathParams: GetTagsTagsInfoPathParams;
    queryParams: GetTagsTagsInfoQueryParams;
}
export declare class GetTagsTagsInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
