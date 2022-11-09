import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoiceSort
/** 
 * Identifies the sort field and sort order.
**/
export class InvoiceSort extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field: string;

  @Metadata({ data: "json, name=order" })
  order?: string;
}
