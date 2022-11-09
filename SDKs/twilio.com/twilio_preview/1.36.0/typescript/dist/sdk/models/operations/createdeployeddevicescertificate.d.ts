import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDEPLOYEDDEVICESCERTIFICATE_SERVERS: string[];
export declare class CreateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    certificateData: string;
    deviceSid?: string;
    friendlyName?: string;
}
export declare class CreateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDeployedDevicesCertificatePathParams;
    request?: CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
    security: CreateDeployedDevicesCertificateSecurity;
}
export declare class CreateDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
