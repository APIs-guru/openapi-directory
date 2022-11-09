import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ResetPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class ResetQueryParams extends SpeakeasyBase {
    monitorClass: string;
    monitorSid: string;
}
export declare class ResetRequest extends SpeakeasyBase {
    pathParams: ResetPathParams;
    queryParams: ResetQueryParams;
}
export declare class ResetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
