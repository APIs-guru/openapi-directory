import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceResponseClarification } from "./invoiceresponseclarification";


export enum DocumentInvoiceResponseResponseCodeEnum {
    Ab = "AB",
    Ip = "IP",
    Uq = "UQ",
    Re = "RE",
    Ap = "AP",
    Pd = "PD"
}


// DocumentInvoiceResponse
/** 
 * The invoice response to send.
**/
export class DocumentInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clarifications", elemType: InvoiceResponseClarification })
  clarifications?: InvoiceResponseClarification[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=responseCode" })
  responseCode: DocumentInvoiceResponseResponseCodeEnum;
}
