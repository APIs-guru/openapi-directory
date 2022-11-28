import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionsIdsPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetRevisionsIdsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetRevisionsIdsRequest extends SpeakeasyBase {
    pathParams: GetRevisionsIdsPathParams;
    queryParams: GetRevisionsIdsQueryParams;
}
export declare class GetRevisionsIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
