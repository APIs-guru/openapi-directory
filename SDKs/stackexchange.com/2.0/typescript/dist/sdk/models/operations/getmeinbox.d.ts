import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeInboxQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeInboxRequest extends SpeakeasyBase {
    queryParams: GetMeInboxQueryParams;
}
export declare class GetMeInboxResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
