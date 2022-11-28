import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsSortEnum {
    Reputation = "reputation",
    Creation = "creation",
    Name = "name",
    Modified = "modified"
}
export declare class GetUsersIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsSortEnum;
    todate?: number;
}
export declare class GetUsersIdsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsPathParams;
    queryParams: GetUsersIdsQueryParams;
}
export declare class GetUsersIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
