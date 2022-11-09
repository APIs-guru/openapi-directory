import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEPLOYEDDEVICESCERTIFICATE_SERVERS: string[];
export declare class UpdateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    deviceSid?: string;
    friendlyName?: string;
}
export declare class UpdateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDeployedDevicesCertificatePathParams;
    request?: UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;
    security: UpdateDeployedDevicesCertificateSecurity;
}
export declare class UpdateDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
