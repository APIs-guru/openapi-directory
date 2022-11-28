import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetMeCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeCommentsSortEnum;
    todate?: number;
}
export declare class GetMeCommentsRequest extends SpeakeasyBase {
    queryParams: GetMeCommentsQueryParams;
}
export declare class GetMeCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
