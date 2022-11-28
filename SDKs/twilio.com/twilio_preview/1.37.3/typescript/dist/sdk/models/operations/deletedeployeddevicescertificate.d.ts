import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteDeployedDevicesCertificatePathParams extends SpeakeasyBase {
    fleetSid: string;
    sid: string;
}
export declare class DeleteDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDeployedDevicesCertificateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDeployedDevicesCertificatePathParams;
    security: DeleteDeployedDevicesCertificateSecurity;
}
export declare class DeleteDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
