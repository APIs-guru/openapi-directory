import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSuggestedEditsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetSuggestedEditsSortEnum {
    Creation = "creation",
    Approval = "approval",
    Rejection = "rejection"
}
export declare class GetSuggestedEditsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetSuggestedEditsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetSuggestedEditsSortEnum;
    todate?: number;
}
export declare class GetSuggestedEditsRequest extends SpeakeasyBase {
    queryParams: GetSuggestedEditsQueryParams;
}
export declare class GetSuggestedEditsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
