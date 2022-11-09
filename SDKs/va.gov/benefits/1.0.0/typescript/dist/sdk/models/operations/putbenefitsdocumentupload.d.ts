import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutBenefitsDocumentUploadHeaders extends SpeakeasyBase {
    contentMd5?: string;
}
export declare class PutBenefitsDocumentUploadRequest extends SpeakeasyBase {
    headers: PutBenefitsDocumentUploadHeaders;
}
export declare class PutBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
    errors: any[];
}
export declare class PutBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class PutBenefitsDocumentUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    putBenefitsDocumentUpload401ApplicationJsonObject?: PutBenefitsDocumentUpload401ApplicationJson;
    putBenefitsDocumentUpload422ApplicationJsonObject?: PutBenefitsDocumentUpload422ApplicationJson;
    putBenefitsDocumentUpload429ApplicationJsonObject?: PutBenefitsDocumentUpload429ApplicationJson;
    putBenefitsDocumentUpload500ApplicationJsonObject?: PutBenefitsDocumentUpload500ApplicationJson;
}
