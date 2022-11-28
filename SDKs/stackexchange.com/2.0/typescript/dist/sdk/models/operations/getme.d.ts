import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeSortEnum {
    Reputation = "reputation",
    Creation = "creation",
    Name = "name",
    Modified = "modified"
}
export declare class GetMeQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeSortEnum;
    todate?: number;
}
export declare class GetMeRequest extends SpeakeasyBase {
    queryParams: GetMeQueryParams;
}
export declare class GetMeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
