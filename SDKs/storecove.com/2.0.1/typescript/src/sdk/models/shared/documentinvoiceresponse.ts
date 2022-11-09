import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceResponseClarification } from "./invoiceresponseclarification";

export enum DocumentInvoiceResponseResponseCodeEnum {
    Ab = "AB"
,    Ip = "IP"
,    Uq = "UQ"
,    Re = "RE"
,    Ap = "AP"
,    Pd = "PD"
}


// DocumentInvoiceResponse
/** 
 * The invoice response to send.
**/
export class DocumentInvoiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clarifications", elemType: shared.InvoiceResponseClarification })
  clarifications?: InvoiceResponseClarification[];

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=responseCode" })
  responseCode: DocumentInvoiceResponseResponseCodeEnum;
}
