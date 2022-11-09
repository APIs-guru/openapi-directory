import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CertificateGetPathParams extends SpeakeasyBase {
    thumbprint: string;
    thumbprintAlgorithm: string;
}
export declare class CertificateGetQueryParams extends SpeakeasyBase {
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class CertificateGetHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class CertificateGetRequest extends SpeakeasyBase {
    pathParams: CertificateGetPathParams;
    queryParams: CertificateGetQueryParams;
    headers: CertificateGetHeaders;
}
export declare class CertificateGetResponse extends SpeakeasyBase {
    batchError?: any;
    certificate?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
