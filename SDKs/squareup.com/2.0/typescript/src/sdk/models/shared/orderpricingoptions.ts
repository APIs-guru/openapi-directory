import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderPricingOptions
/** 
 * Pricing options for an order. The options affect how the order's price is calculated.
 * They can be used, for example, to apply automatic price adjustments that are based on preconfigured
 * [pricing rules](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogPricingRule).
**/
export class OrderPricingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_apply_discounts" })
  autoApplyDiscounts?: boolean;

  @Metadata({ data: "json, name=auto_apply_taxes" })
  autoApplyTaxes?: boolean;
}
