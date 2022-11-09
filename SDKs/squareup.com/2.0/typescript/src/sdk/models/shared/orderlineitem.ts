import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemAppliedDiscount } from "./orderlineitemapplieddiscount";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
import { Money } from "./money";
import { Money } from "./money";
import { OrderLineItemModifier } from "./orderlineitemmodifier";
import { OrderLineItemPricingBlocklists } from "./orderlineitempricingblocklists";
import { OrderQuantityUnit } from "./orderquantityunit";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";


// OrderLineItem
/** 
 * Represents a line item in an order. Each line item describes a different
 * product to purchase, with its own quantity and price details.
**/
export class OrderLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_discounts", elemType: shared.OrderLineItemAppliedDiscount })
  appliedDiscounts?: OrderLineItemAppliedDiscount[];

  @Metadata({ data: "json, name=applied_taxes", elemType: shared.OrderLineItemAppliedTax })
  appliedTaxes?: OrderLineItemAppliedTax[];

  @Metadata({ data: "json, name=base_price_money" })
  basePriceMoney?: Money;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=gross_sales_money" })
  grossSalesMoney?: Money;

  @Metadata({ data: "json, name=item_type" })
  itemType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=modifiers", elemType: shared.OrderLineItemModifier })
  modifiers?: OrderLineItemModifier[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=pricing_blocklists" })
  pricingBlocklists?: OrderLineItemPricingBlocklists;

  @Metadata({ data: "json, name=quantity" })
  quantity: string;

  @Metadata({ data: "json, name=quantity_unit" })
  quantityUnit?: OrderQuantityUnit;

  @Metadata({ data: "json, name=total_discount_money" })
  totalDiscountMoney?: Money;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;

  @Metadata({ data: "json, name=total_tax_money" })
  totalTaxMoney?: Money;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=variation_name" })
  variationName?: string;

  @Metadata({ data: "json, name=variation_total_price_money" })
  variationTotalPriceMoney?: Money;
}
