import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDEPLOYEDDEVICESDEVICE_SERVERS: string[];
export declare class CreateDeployedDevicesDevicePathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    deploymentSid?: string;
    enabled?: boolean;
    friendlyName?: string;
    identity?: string;
    uniqueName?: string;
}
export declare class CreateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDeployedDevicesDevicePathParams;
    request?: CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;
    security: CreateDeployedDevicesDeviceSecurity;
}
export declare class CreateDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
