import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invoice } from "./invoice";


// UpdateInvoiceRequest
/** 
 * Describes a `UpdateInvoice` request.
**/
export class UpdateInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields_to_clear" })
  fieldsToClear?: string[];

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=invoice" })
  invoice: Invoice;
}
