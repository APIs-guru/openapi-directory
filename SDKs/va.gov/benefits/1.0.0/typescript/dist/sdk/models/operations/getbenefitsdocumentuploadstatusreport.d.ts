import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBenefitsDocumentUploadStatusReportSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetBenefitsDocumentUploadStatusReport200ApplicationJson extends SpeakeasyBase {
    data: any[];
}
export declare class GetBenefitsDocumentUploadStatusReport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatusReport403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatusReport422ApplicationJson extends SpeakeasyBase {
    errors: any[];
}
export declare class GetBenefitsDocumentUploadStatusReport429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadStatusReport500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class GetBenefitsDocumentUploadStatusReportRequest extends SpeakeasyBase {
    request: shared.DocumentUploadStatusGuidList;
    security: GetBenefitsDocumentUploadStatusReportSecurity;
}
export declare class GetBenefitsDocumentUploadStatusReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBenefitsDocumentUploadStatusReport200ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport200ApplicationJson;
    getBenefitsDocumentUploadStatusReport401ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport401ApplicationJson;
    getBenefitsDocumentUploadStatusReport403ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport403ApplicationJson;
    getBenefitsDocumentUploadStatusReport422ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport422ApplicationJson;
    getBenefitsDocumentUploadStatusReport429ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport429ApplicationJson;
    getBenefitsDocumentUploadStatusReport500ApplicationJsonObject?: GetBenefitsDocumentUploadStatusReport500ApplicationJson;
}
