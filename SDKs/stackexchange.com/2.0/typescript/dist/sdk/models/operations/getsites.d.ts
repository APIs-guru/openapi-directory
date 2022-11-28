import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSitesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetSitesRequest extends SpeakeasyBase {
    queryParams: GetSitesQueryParams;
}
export declare class GetSitesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
