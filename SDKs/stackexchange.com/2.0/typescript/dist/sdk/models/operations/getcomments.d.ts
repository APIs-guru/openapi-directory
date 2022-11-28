import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCommentsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetCommentsSortEnum {
    Creation = "creation",
    Votes = "votes"
}
export declare class GetCommentsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetCommentsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetCommentsSortEnum;
    todate?: number;
}
export declare class GetCommentsRequest extends SpeakeasyBase {
    queryParams: GetCommentsQueryParams;
}
export declare class GetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
