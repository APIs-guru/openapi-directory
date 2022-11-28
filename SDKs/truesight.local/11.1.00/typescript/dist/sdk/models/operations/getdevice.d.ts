import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDevicePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    pathParams: GetDevicePathParams;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
