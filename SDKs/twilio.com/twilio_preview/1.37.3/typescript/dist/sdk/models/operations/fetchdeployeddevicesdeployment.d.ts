import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class FetchDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class FetchDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeployedDevicesDeploymentPathParams;
    security: FetchDeployedDevicesDeploymentSecurity;
}
export declare class FetchDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
