import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CertificateListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class CertificateListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class CertificateListRequest extends SpeakeasyBase {
    queryParams: CertificateListQueryParams;
    headers: CertificateListHeaders;
}
export declare class CertificateListResponse extends SpeakeasyBase {
    batchError?: any;
    certificateListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
