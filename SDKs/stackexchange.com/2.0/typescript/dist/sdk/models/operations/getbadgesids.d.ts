import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBadgesIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetBadgesIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetBadgesIdsSortEnum {
    Rank = "rank",
    Name = "name",
    Type = "type"
}
export declare class GetBadgesIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetBadgesIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetBadgesIdsSortEnum;
    todate?: number;
}
export declare class GetBadgesIdsRequest extends SpeakeasyBase {
    pathParams: GetBadgesIdsPathParams;
    queryParams: GetBadgesIdsQueryParams;
}
export declare class GetBadgesIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
