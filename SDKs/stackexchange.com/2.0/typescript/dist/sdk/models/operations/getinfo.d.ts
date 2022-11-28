import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInfoQueryParams extends SpeakeasyBase {
    site: string;
}
export declare class GetInfoRequest extends SpeakeasyBase {
    queryParams: GetInfoQueryParams;
}
export declare class GetInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
