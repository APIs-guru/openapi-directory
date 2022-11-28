import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateDeployedDevicesKeyPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
    deviceSid?: string;
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDeployedDevicesKeyPathParams;
    request?: UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
    security: UpdateDeployedDevicesKeySecurity;
}
export declare class UpdateDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
