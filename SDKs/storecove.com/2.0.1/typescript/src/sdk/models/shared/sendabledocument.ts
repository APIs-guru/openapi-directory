import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { DocumentInvoiceResponse } from "./documentinvoiceresponse";
import { RawDocumentData } from "./rawdocumentdata";


export enum SendableDocumentDocumentTypeEnum {
    Invoice = "invoice",
    InvoiceResponse = "invoice_response"
}


// SendableDocument
/** 
 * The document to send.
**/
export class SendableDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType: SendableDocumentDocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: Invoice;

  @SpeakeasyMetadata({ data: "json, name=invoiceResponse" })
  invoiceResponse?: DocumentInvoiceResponse;

  @SpeakeasyMetadata({ data: "json, name=rawDocumentData" })
  rawDocumentData?: RawDocumentData;
}
