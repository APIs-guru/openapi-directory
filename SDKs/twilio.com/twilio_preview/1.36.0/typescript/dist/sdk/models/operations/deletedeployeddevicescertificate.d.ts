import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEDEPLOYEDDEVICESCERTIFICATE_SERVERS: string[];
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
