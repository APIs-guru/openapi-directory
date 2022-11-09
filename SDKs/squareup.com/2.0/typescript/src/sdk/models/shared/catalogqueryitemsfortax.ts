import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryItemsForTax
/** 
 * The query filter to return the items containing the specified tax IDs.
**/
export class CatalogQueryItemsForTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax_ids" })
  taxIds: string[];
}
