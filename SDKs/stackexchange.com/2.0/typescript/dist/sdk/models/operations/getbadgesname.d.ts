import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBadgesNameOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetBadgesNameSortEnum {
    Rank = "rank",
    Name = "name"
}
export declare class GetBadgesNameQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetBadgesNameOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetBadgesNameSortEnum;
    todate?: number;
}
export declare class GetBadgesNameRequest extends SpeakeasyBase {
    queryParams: GetBadgesNameQueryParams;
}
export declare class GetBadgesNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
