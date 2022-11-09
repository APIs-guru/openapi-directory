import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryItemsForItemOptions
/** 
 * The query filter to return the items containing the specified item option IDs.
**/
export class CatalogQueryItemsForItemOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_option_ids" })
  itemOptionIds?: string[];
}
