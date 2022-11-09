import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEPLOYEDDEVICESFLEET_SERVERS: string[];
export declare class UpdateDeployedDevicesFleetPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
    defaultDeploymentSid?: string;
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDeployedDevicesFleetPathParams;
    request?: UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;
    security: UpdateDeployedDevicesFleetSecurity;
}
export declare class UpdateDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
