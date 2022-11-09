import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS: string[];
export declare class UpdateDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    friendlyName?: string;
    syncServiceSid?: string;
}
export declare class UpdateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDeployedDevicesDeploymentPathParams;
    request?: UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;
    security: UpdateDeployedDevicesDeploymentSecurity;
}
export declare class UpdateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
