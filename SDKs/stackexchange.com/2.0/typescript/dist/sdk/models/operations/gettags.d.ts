import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetTagsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsSortEnum;
    todate?: number;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    queryParams: GetTagsQueryParams;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
