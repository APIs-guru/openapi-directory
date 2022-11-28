import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class DeleteDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDeployedDevicesDeploymentPathParams;
    security: DeleteDeployedDevicesDeploymentSecurity;
}
export declare class DeleteDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
