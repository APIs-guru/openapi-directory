import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeFavoritesOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeFavoritesSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Added = "added"
}
export declare class GetMeFavoritesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeFavoritesOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeFavoritesSortEnum;
    todate?: number;
}
export declare class GetMeFavoritesRequest extends SpeakeasyBase {
    queryParams: GetMeFavoritesQueryParams;
}
export declare class GetMeFavoritesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
