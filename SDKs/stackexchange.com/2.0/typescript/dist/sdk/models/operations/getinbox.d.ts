import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInboxQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetInboxRequest extends SpeakeasyBase {
    queryParams: GetInboxQueryParams;
}
export declare class GetInboxResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
