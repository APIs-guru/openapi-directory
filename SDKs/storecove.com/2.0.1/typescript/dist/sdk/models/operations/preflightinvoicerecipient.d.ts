import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreflightInvoiceRecipientRequest extends SpeakeasyBase {
    request: shared.InvoiceRecipientPreflight;
}
export declare class PreflightInvoiceRecipientResponse extends SpeakeasyBase {
    contentType: string;
    errorModels?: any[];
    preflightInvoiceRecipientResult?: shared.PreflightInvoiceRecipientResult;
    statusCode: number;
}
