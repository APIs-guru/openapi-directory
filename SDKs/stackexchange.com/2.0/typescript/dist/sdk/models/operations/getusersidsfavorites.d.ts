import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsFavoritesPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsFavoritesOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsFavoritesSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Added = "added"
}
export declare class GetUsersIdsFavoritesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsFavoritesOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsFavoritesSortEnum;
    todate?: number;
}
export declare class GetUsersIdsFavoritesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsFavoritesPathParams;
    queryParams: GetUsersIdsFavoritesQueryParams;
}
export declare class GetUsersIdsFavoritesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
