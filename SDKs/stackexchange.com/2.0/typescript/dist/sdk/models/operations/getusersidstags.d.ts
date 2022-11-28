import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsTagsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsTagsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsTagsSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetUsersIdsTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsTagsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsTagsSortEnum;
    todate?: number;
}
export declare class GetUsersIdsTagsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsTagsPathParams;
    queryParams: GetUsersIdsTagsQueryParams;
}
export declare class GetUsersIdsTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
