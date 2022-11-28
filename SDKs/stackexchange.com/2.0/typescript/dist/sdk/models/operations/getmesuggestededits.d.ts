import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeSuggestedEditsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeSuggestedEditsSortEnum {
    Creation = "creation",
    Approval = "approval",
    Rejection = "rejection"
}
export declare class GetMeSuggestedEditsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeSuggestedEditsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeSuggestedEditsSortEnum;
    todate?: number;
}
export declare class GetMeSuggestedEditsRequest extends SpeakeasyBase {
    queryParams: GetMeSuggestedEditsQueryParams;
}
export declare class GetMeSuggestedEditsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
