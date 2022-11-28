import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBadgesTagsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetBadgesTagsSortEnum {
    Rank = "rank",
    Name = "name"
}
export declare class GetBadgesTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetBadgesTagsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetBadgesTagsSortEnum;
    todate?: number;
}
export declare class GetBadgesTagsRequest extends SpeakeasyBase {
    queryParams: GetBadgesTagsQueryParams;
}
export declare class GetBadgesTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
