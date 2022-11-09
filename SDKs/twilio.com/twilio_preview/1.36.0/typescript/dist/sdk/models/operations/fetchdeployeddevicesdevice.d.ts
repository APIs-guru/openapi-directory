import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEPLOYEDDEVICESDEVICE_SERVERS: string[];
export declare class FetchDeployedDevicesDevicePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class FetchDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeployedDevicesDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeployedDevicesDevicePathParams;
    security: FetchDeployedDevicesDeviceSecurity;
}
export declare class FetchDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
