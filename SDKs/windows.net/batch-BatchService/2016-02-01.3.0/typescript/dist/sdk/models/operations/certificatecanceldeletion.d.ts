import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CertificateCancelDeletionPathParams extends SpeakeasyBase {
    thumbprint: string;
    thumbprintAlgorithm: string;
}
export declare class CertificateCancelDeletionQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class CertificateCancelDeletionHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class CertificateCancelDeletionRequest extends SpeakeasyBase {
    pathParams: CertificateCancelDeletionPathParams;
    queryParams: CertificateCancelDeletionQueryParams;
    headers: CertificateCancelDeletionHeaders;
}
export declare class CertificateCancelDeletionResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
