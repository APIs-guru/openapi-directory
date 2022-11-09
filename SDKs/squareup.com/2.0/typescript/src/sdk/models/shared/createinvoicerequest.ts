import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invoice } from "./invoice";


// CreateInvoiceRequest
/** 
 * Describes a `CreateInvoice` request.
**/
export class CreateInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=invoice" })
  invoice: Invoice;
}
