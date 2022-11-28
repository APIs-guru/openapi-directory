import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUsersModeratorsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersModeratorsSortEnum {
    Reputation = "reputation",
    Creation = "creation",
    Name = "name",
    Modified = "modified"
}
export declare class GetUsersModeratorsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersModeratorsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersModeratorsSortEnum;
    todate?: number;
}
export declare class GetUsersModeratorsRequest extends SpeakeasyBase {
    queryParams: GetUsersModeratorsQueryParams;
}
export declare class GetUsersModeratorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
