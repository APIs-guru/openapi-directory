import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUsersModeratorsElectedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersModeratorsElectedSortEnum {
    Reputation = "reputation",
    Creation = "creation",
    Name = "name",
    Modified = "modified"
}
export declare class GetUsersModeratorsElectedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersModeratorsElectedOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersModeratorsElectedSortEnum;
    todate?: number;
}
export declare class GetUsersModeratorsElectedRequest extends SpeakeasyBase {
    queryParams: GetUsersModeratorsElectedQueryParams;
}
export declare class GetUsersModeratorsElectedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
