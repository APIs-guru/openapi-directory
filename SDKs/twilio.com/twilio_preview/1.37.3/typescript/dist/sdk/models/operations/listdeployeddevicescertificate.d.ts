import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesCertificatePathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class ListDeployedDevicesCertificateQueryParams extends SpeakeasyBase {
    deviceSid?: string;
    pageSize?: number;
}
export declare class ListDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse extends SpeakeasyBase {
    certificates?: shared.PreviewDeployedDevicesFleetCertificate[];
    meta?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta;
}
export declare class ListDeployedDevicesCertificateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDeployedDevicesCertificatePathParams;
    queryParams: ListDeployedDevicesCertificateQueryParams;
    security: ListDeployedDevicesCertificateSecurity;
}
export declare class ListDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    listDeployedDevicesCertificateResponse?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse;
    statusCode: number;
}
