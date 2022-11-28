import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesKeyPathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest extends SpeakeasyBase {
    deviceSid?: string;
    friendlyName?: string;
}
export declare class CreateDeployedDevicesKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeployedDevicesKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDeployedDevicesKeyPathParams;
    request?: CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;
    security: CreateDeployedDevicesKeySecurity;
}
export declare class CreateDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
