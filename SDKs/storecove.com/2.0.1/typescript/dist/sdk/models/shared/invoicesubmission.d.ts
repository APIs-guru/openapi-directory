import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Invoice } from "./invoice";
import { InvoiceData } from "./invoicedata";
import { InvoiceRecipient } from "./invoicerecipient";
import { Routing } from "./routing";
export declare enum InvoiceSubmissionModeEnum {
    Direct = "direct"
}
/**
 * The invoice you want Storecove to process, with some meta-data.
**/
export declare class InvoiceSubmission extends SpeakeasyBase {
    attachments?: Attachment[];
    createPrimaryImage?: boolean;
    document?: string;
    documentUrl?: string;
    idempotencyGuid?: string;
    invoice?: Invoice;
    invoiceData?: InvoiceData;
    invoiceRecipient?: InvoiceRecipient;
    legalEntityId?: number;
    legalSupplierId?: number;
    mode?: InvoiceSubmissionModeEnum;
    routing?: Routing;
    supplierId?: number;
}
