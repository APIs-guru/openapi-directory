import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogStockConversion
/** 
 * Represents the rule of conversion between a stockable [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
 * and a non-stockable sell-by or receive-by `CatalogItemVariation` that
 * share the same underlying stock.
**/
export class CatalogStockConversion extends SpeakeasyBase {
  @Metadata({ data: "json, name=nonstockable_quantity" })
  nonstockableQuantity: string;

  @Metadata({ data: "json, name=stockable_item_variation_id" })
  stockableItemVariationId: string;

  @Metadata({ data: "json, name=stockable_quantity" })
  stockableQuantity: string;
}
