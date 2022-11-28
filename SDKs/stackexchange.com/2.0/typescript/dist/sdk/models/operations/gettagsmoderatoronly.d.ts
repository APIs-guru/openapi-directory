import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsModeratorOnlyOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsModeratorOnlySortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetTagsModeratorOnlyQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetTagsModeratorOnlyOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsModeratorOnlySortEnum;
    todate?: number;
}
export declare class GetTagsModeratorOnlyRequest extends SpeakeasyBase {
    queryParams: GetTagsModeratorOnlyQueryParams;
}
export declare class GetTagsModeratorOnlyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
