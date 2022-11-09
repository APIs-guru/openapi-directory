import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEPLOYEDDEVICESKEY_SERVERS: string[];
export declare class FetchDeployedDevicesKeyPathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class FetchDeployedDevicesKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeployedDevicesKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeployedDevicesKeyPathParams;
    security: FetchDeployedDevicesKeySecurity;
}
export declare class FetchDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
