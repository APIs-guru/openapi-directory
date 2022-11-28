import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeCommentsToIdPathParams extends SpeakeasyBase {
    toId: number;
}
export declare enum GetMeCommentsToIdOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeCommentsToIdSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeCommentsToIdQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeCommentsToIdOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeCommentsToIdSortEnum;
    todate?: number;
}
export declare class GetMeCommentsToIdRequest extends SpeakeasyBase {
    pathParams: GetMeCommentsToIdPathParams;
    queryParams: GetMeCommentsToIdQueryParams;
}
export declare class GetMeCommentsToIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
