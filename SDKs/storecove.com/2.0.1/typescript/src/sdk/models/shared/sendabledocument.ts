import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invoice } from "./invoice";
import { DocumentInvoiceResponse } from "./documentinvoiceresponse";
import { RawDocumentData } from "./rawdocumentdata";

export enum SendableDocumentDocumentTypeEnum {
    Invoice = "invoice"
,    InvoiceResponse = "invoice_response"
}


// SendableDocument
/** 
 * The document to send.
**/
export class SendableDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentType" })
  documentType: SendableDocumentDocumentTypeEnum;

  @Metadata({ data: "json, name=invoice" })
  invoice?: Invoice;

  @Metadata({ data: "json, name=invoiceResponse" })
  invoiceResponse?: DocumentInvoiceResponse;

  @Metadata({ data: "json, name=rawDocumentData" })
  rawDocumentData?: RawDocumentData;
}
