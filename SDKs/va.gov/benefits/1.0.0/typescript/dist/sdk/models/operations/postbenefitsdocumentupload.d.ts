import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostBenefitsDocumentUploadSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PostBenefitsDocumentUploadRequest extends SpeakeasyBase {
    security: PostBenefitsDocumentUploadSecurity;
}
export declare class PostBenefitsDocumentUpload202ApplicationJson extends SpeakeasyBase {
    data: any;
}
export declare class PostBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
    errors: any[];
}
export declare class PostBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class PostBenefitsDocumentUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postBenefitsDocumentUpload202ApplicationJsonObject?: PostBenefitsDocumentUpload202ApplicationJson;
    postBenefitsDocumentUpload401ApplicationJsonObject?: PostBenefitsDocumentUpload401ApplicationJson;
    postBenefitsDocumentUpload403ApplicationJsonObject?: PostBenefitsDocumentUpload403ApplicationJson;
    postBenefitsDocumentUpload422ApplicationJsonObject?: PostBenefitsDocumentUpload422ApplicationJson;
    postBenefitsDocumentUpload429ApplicationJsonObject?: PostBenefitsDocumentUpload429ApplicationJson;
    postBenefitsDocumentUpload500ApplicationJsonObject?: PostBenefitsDocumentUpload500ApplicationJson;
}
