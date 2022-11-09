import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoiceFilter
/** 
 * Describes query filters to apply.
**/
export class InvoiceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_ids" })
  customerIds?: string[];

  @Metadata({ data: "json, name=location_ids" })
  locationIds: string[];
}
