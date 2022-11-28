import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDeployedDevicesDeviceServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesDevicePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class DeleteDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDeployedDevicesDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDeployedDevicesDevicePathParams;
    security: DeleteDeployedDevicesDeviceSecurity;
}
export declare class DeleteDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
