import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
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
