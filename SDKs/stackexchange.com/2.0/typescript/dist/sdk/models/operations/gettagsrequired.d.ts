import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsRequiredOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsRequiredSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetTagsRequiredQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetTagsRequiredOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsRequiredSortEnum;
    todate?: number;
}
export declare class GetTagsRequiredRequest extends SpeakeasyBase {
    queryParams: GetTagsRequiredQueryParams;
}
export declare class GetTagsRequiredResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
