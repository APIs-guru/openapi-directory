import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInvoiceSubmissionRequest extends SpeakeasyBase {
    request: shared.InvoiceSubmission;
}
export declare class CreateInvoiceSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModels?: any[];
    invoiceSubmissionResult?: shared.InvoiceSubmissionResult;
    statusCode: number;
}
