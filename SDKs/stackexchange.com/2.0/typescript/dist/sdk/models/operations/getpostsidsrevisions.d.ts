import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPostsIdsRevisionsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetPostsIdsRevisionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetPostsIdsRevisionsRequest extends SpeakeasyBase {
    pathParams: GetPostsIdsRevisionsPathParams;
    queryParams: GetPostsIdsRevisionsQueryParams;
}
export declare class GetPostsIdsRevisionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
