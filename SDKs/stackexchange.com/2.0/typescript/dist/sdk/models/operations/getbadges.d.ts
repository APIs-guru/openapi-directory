import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBadgesOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetBadgesSortEnum {
    Rank = "rank",
    Name = "name",
    Type = "type"
}
export declare class GetBadgesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetBadgesOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetBadgesSortEnum;
    todate?: number;
}
export declare class GetBadgesRequest extends SpeakeasyBase {
    queryParams: GetBadgesQueryParams;
}
export declare class GetBadgesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
