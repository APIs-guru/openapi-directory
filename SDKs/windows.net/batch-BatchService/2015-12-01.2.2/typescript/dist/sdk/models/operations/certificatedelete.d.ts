import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateDeletePathParams extends SpeakeasyBase {
    thumbprint: string;
    thumbprintAlgorithm: string;
}
export declare class CertificateDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class CertificateDeleteHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class CertificateDeleteRequest extends SpeakeasyBase {
    pathParams: CertificateDeletePathParams;
    queryParams: CertificateDeleteQueryParams;
    headers: CertificateDeleteHeaders;
}
export declare class CertificateDeleteResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
