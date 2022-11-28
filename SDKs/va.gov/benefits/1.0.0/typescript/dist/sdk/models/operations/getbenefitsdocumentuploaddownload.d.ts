import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBenefitsDocumentUploadDownloadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBenefitsDocumentUploadDownloadSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetBenefitsDocumentUploadDownload401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadDownload403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadDownload404ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class GetBenefitsDocumentUploadDownload429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetBenefitsDocumentUploadDownload500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class GetBenefitsDocumentUploadDownloadRequest extends SpeakeasyBase {
    pathParams: GetBenefitsDocumentUploadDownloadPathParams;
    security: GetBenefitsDocumentUploadDownloadSecurity;
}
export declare class GetBenefitsDocumentUploadDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBenefitsDocumentUploadDownload200ApplicationZipBinaryString?: Uint8Array;
    getBenefitsDocumentUploadDownload401ApplicationJsonObject?: GetBenefitsDocumentUploadDownload401ApplicationJson;
    getBenefitsDocumentUploadDownload403ApplicationJsonObject?: GetBenefitsDocumentUploadDownload403ApplicationJson;
    getBenefitsDocumentUploadDownload404ApplicationJsonObject?: GetBenefitsDocumentUploadDownload404ApplicationJson;
    getBenefitsDocumentUploadDownload429ApplicationJsonObject?: GetBenefitsDocumentUploadDownload429ApplicationJson;
    getBenefitsDocumentUploadDownload500ApplicationJsonObject?: GetBenefitsDocumentUploadDownload500ApplicationJson;
}
