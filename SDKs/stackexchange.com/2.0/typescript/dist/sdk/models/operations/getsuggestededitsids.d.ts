import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSuggestedEditsIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetSuggestedEditsIdsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetSuggestedEditsIdsSortEnum {
    Creation = "creation",
    Approval = "approval",
    Rejection = "rejection"
}
export declare class GetSuggestedEditsIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetSuggestedEditsIdsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetSuggestedEditsIdsSortEnum;
    todate?: number;
}
export declare class GetSuggestedEditsIdsRequest extends SpeakeasyBase {
    pathParams: GetSuggestedEditsIdsPathParams;
    queryParams: GetSuggestedEditsIdsQueryParams;
}
export declare class GetSuggestedEditsIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
