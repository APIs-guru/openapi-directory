import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { DocumentInvoiceResponse } from "./documentinvoiceresponse";
import { RawDocumentData } from "./rawdocumentdata";
export declare enum SendableDocumentDocumentTypeEnum {
    Invoice = "invoice",
    InvoiceResponse = "invoice_response"
}
/**
 * The document to send.
**/
export declare class SendableDocument extends SpeakeasyBase {
    documentType: SendableDocumentDocumentTypeEnum;
    invoice?: Invoice;
    invoiceResponse?: DocumentInvoiceResponse;
    rawDocumentData?: RawDocumentData;
}
