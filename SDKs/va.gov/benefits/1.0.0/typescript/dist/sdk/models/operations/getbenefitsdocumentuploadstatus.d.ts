import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBenefitsDocumentUploadStatusPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBenefitsDocumentUploadStatusSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetBenefitsDocumentUploadStatus401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatus403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatus404ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class GetBenefitsDocumentUploadStatus429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatus500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class GetBenefitsDocumentUploadStatusRequest extends SpeakeasyBase {
    pathParams: GetBenefitsDocumentUploadStatusPathParams;
    security: GetBenefitsDocumentUploadStatusSecurity;
}
export declare class GetBenefitsDocumentUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBenefitsDocumentUploadStatus200ApplicationJsonAny?: any;
    getBenefitsDocumentUploadStatus401ApplicationJsonObject?: GetBenefitsDocumentUploadStatus401ApplicationJson;
    getBenefitsDocumentUploadStatus403ApplicationJsonObject?: GetBenefitsDocumentUploadStatus403ApplicationJson;
    getBenefitsDocumentUploadStatus404ApplicationJsonObject?: GetBenefitsDocumentUploadStatus404ApplicationJson;
    getBenefitsDocumentUploadStatus429ApplicationJsonObject?: GetBenefitsDocumentUploadStatus429ApplicationJson;
    getBenefitsDocumentUploadStatus500ApplicationJsonObject?: GetBenefitsDocumentUploadStatus500ApplicationJson;
}
