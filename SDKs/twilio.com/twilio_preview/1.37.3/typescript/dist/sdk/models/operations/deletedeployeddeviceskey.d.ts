import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesKeyPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class DeleteDeployedDevicesKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDeployedDevicesKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDeployedDevicesKeyPathParams;
    security: DeleteDeployedDevicesKeySecurity;
}
export declare class DeleteDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
