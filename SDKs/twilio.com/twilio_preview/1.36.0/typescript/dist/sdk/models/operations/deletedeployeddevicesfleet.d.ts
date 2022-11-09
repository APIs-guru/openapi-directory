import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEDEPLOYEDDEVICESFLEET_SERVERS: string[];
export declare class DeleteDeployedDevicesFleetPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteDeployedDevicesFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDeployedDevicesFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDeployedDevicesFleetPathParams;
    security: DeleteDeployedDevicesFleetSecurity;
}
export declare class DeleteDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
