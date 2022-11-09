import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEPLOYEDDEVICESDEVICE_SERVERS: string[];
export declare class UpdateDeployedDevicesDevicePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    deploymentSid?: string;
    enabled?: boolean;
    friendlyName?: string;
    identity?: string;
}
export declare class UpdateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDeployedDevicesDevicePathParams;
    request?: UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;
    security: UpdateDeployedDevicesDeviceSecurity;
}
export declare class UpdateDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
