import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEPLOYEDDEVICESFLEET_SERVERS: string[];
export declare class FetchDeployedDevicesFleetPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchDeployedDevicesFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeployedDevicesFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeployedDevicesFleetPathParams;
    security: FetchDeployedDevicesFleetSecurity;
}
export declare class FetchDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
