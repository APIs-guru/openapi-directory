import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeBadgesOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeBadgesSortEnum {
    Rank = "rank",
    Name = "name",
    Type = "type"
}
export declare class GetMeBadgesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeBadgesOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeBadgesSortEnum;
    todate?: number;
}
export declare class GetMeBadgesRequest extends SpeakeasyBase {
    queryParams: GetMeBadgesQueryParams;
}
export declare class GetMeBadgesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
