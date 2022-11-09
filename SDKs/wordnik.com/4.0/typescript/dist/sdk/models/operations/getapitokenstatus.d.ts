import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiTokenStatusHeaders extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetApiTokenStatusRequest extends SpeakeasyBase {
    headers: GetApiTokenStatusHeaders;
}
export declare class GetApiTokenStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
