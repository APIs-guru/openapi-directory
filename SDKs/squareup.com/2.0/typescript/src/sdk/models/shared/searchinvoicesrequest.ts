import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvoiceQuery } from "./invoicequery";


// SearchInvoicesRequest
/** 
 * Describes a `SearchInvoices` request.
**/
export class SearchInvoicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query: InvoiceQuery;
}
