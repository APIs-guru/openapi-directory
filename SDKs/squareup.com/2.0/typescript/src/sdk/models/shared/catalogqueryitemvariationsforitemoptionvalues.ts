import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryItemVariationsForItemOptionValues
/** 
 * The query filter to return the item variations containing the specified item option value IDs.
**/
export class CatalogQueryItemVariationsForItemOptionValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_option_value_ids" })
  itemOptionValueIds?: string[];
}
