import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsSuggestedEditsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetUsersIdsSuggestedEditsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetUsersIdsSuggestedEditsSortEnum {
    Creation = "creation",
    Approval = "approval",
    Rejection = "rejection"
}
export declare class GetUsersIdsSuggestedEditsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetUsersIdsSuggestedEditsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetUsersIdsSuggestedEditsSortEnum;
    todate?: number;
}
export declare class GetUsersIdsSuggestedEditsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsSuggestedEditsPathParams;
    queryParams: GetUsersIdsSuggestedEditsQueryParams;
}
export declare class GetUsersIdsSuggestedEditsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
