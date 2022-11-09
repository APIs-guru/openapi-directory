import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvoiceFilter } from "./invoicefilter";
import { InvoiceSort } from "./invoicesort";


// InvoiceQuery
/** 
 * Describes query criteria for searching invoices.
**/
export class InvoiceQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter: InvoiceFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: InvoiceSort;
}
