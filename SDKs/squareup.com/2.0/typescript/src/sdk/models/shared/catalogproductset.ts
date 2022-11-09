import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogProductSet
/** 
 * Represents a collection of catalog objects for the purpose of applying a
 * `PricingRule`. Including a catalog object will include all of its subtypes.
 * For example, including a category in a product set will include all of its
 * items and associated item variations in the product set. Including an item in
 * a product set will also include its item variations.
**/
export class CatalogProductSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=all_products" })
  allProducts?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product_ids_all" })
  productIdsAll?: string[];

  @Metadata({ data: "json, name=product_ids_any" })
  productIdsAny?: string[];

  @Metadata({ data: "json, name=quantity_exact" })
  quantityExact?: number;

  @Metadata({ data: "json, name=quantity_max" })
  quantityMax?: number;

  @Metadata({ data: "json, name=quantity_min" })
  quantityMin?: number;
}
