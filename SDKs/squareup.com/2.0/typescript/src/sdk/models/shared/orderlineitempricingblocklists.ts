import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemPricingBlocklistsBlockedDiscount } from "./orderlineitempricingblocklistsblockeddiscount";
import { OrderLineItemPricingBlocklistsBlockedTax } from "./orderlineitempricingblocklistsblockedtax";


// OrderLineItemPricingBlocklists
/** 
 * Describes pricing adjustments that are blocked from manual and 
 * automatic application to a line item. For more information, see 
 * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
**/
export class OrderLineItemPricingBlocklists extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked_discounts", elemType: shared.OrderLineItemPricingBlocklistsBlockedDiscount })
  blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[];

  @Metadata({ data: "json, name=blocked_taxes", elemType: shared.OrderLineItemPricingBlocklistsBlockedTax })
  blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[];
}
