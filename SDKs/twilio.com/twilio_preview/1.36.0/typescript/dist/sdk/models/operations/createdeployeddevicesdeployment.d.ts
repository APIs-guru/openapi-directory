import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS: string[];
export declare class CreateDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    friendlyName?: string;
    syncServiceSid?: string;
}
export declare class CreateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDeployedDevicesDeploymentPathParams;
    request?: CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;
    security: CreateDeployedDevicesDeploymentSecurity;
}
export declare class CreateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
