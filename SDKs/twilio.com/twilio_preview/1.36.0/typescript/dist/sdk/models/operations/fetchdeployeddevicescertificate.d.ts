import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEPLOYEDDEVICESCERTIFICATE_SERVERS: string[];
export declare class FetchDeployedDevicesCertificatePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class FetchDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeployedDevicesCertificateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDeployedDevicesCertificatePathParams;
    security: FetchDeployedDevicesCertificateSecurity;
}
export declare class FetchDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
