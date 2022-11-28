import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeMergesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetMeMergesRequest extends SpeakeasyBase {
    queryParams: GetMeMergesQueryParams;
}
export declare class GetMeMergesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
