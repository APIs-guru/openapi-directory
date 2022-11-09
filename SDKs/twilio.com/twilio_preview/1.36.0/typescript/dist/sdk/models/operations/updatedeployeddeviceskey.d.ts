import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEPLOYEDDEVICESKEY_SERVERS: string[];
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
