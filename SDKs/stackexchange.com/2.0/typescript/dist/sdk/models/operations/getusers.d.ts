import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUsersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersSortEnum {
    Reputation = "reputation",
    Creation = "creation",
    Name = "name",
    Modified = "modified"
}
export declare class GetUsersQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    inname?: string;
    max?: string;
    min?: string;
    order?: GetUsersOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersSortEnum;
    todate?: number;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
