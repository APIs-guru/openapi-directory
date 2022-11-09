import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CertificateAddQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class CertificateAddHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class CertificateAddRequest extends SpeakeasyBase {
    queryParams: CertificateAddQueryParams;
    headers: CertificateAddHeaders;
    request: any;
}
export declare class CertificateAddResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
