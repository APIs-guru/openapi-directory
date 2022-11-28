import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShowInvoiceSubmissionEvidencePathParams extends SpeakeasyBase {
    guid: string;
}
export declare class ShowInvoiceSubmissionEvidenceRequest extends SpeakeasyBase {
    pathParams: ShowInvoiceSubmissionEvidencePathParams;
}
export declare class ShowInvoiceSubmissionEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    invoiceSubmissionEvidence?: any;
    statusCode: number;
}
