import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDeviceMonitorsPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetDeviceMonitorsRequest extends SpeakeasyBase {
    pathParams: GetDeviceMonitorsPathParams;
}
export declare class GetDeviceMonitorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
