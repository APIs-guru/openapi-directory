import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateDeployedDevicesFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeployedDevicesFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;
    security: CreateDeployedDevicesFleetSecurity;
}
export declare class CreateDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
