import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogItemOptionForItem
/** 
 *  An option that can be assigned to an item.
 * For example, a t-shirt item may offer a color option or a size option.
**/
export class CatalogItemOptionForItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_option_id" })
  itemOptionId?: string;
}
