import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogItemOptionValueForItemVariation
/** 
 * A `CatalogItemOptionValue` links an item variation to an item option as
 * an item option value. For example, a t-shirt item may offer a color option and
 * a size option. An item option value would represent each variation of t-shirt:
 * For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
**/
export class CatalogItemOptionValueForItemVariation extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_option_id" })
  itemOptionId?: string;

  @Metadata({ data: "json, name=item_option_value_id" })
  itemOptionValueId?: string;
}
