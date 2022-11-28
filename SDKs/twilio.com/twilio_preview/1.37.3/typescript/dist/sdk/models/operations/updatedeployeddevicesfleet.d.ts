import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
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
