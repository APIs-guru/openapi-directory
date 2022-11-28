import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsBadgesPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsBadgesOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsBadgesSortEnum {
    Rank = "rank",
    Name = "name",
    Type = "type",
    Awarded = "awarded"
}
export declare class GetUsersIdsBadgesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsBadgesOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsBadgesSortEnum;
    todate?: number;
}
export declare class GetUsersIdsBadgesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsBadgesPathParams;
    queryParams: GetUsersIdsBadgesQueryParams;
}
export declare class GetUsersIdsBadgesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
