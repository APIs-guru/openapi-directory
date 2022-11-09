import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemAppliedDiscount } from "./orderlineitemapplieddiscount";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
import { Money } from "./money";
import { Money } from "./money";
import { OrderQuantityUnit } from "./orderquantityunit";
import { OrderReturnLineItemModifier } from "./orderreturnlineitemmodifier";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";


// OrderReturnLineItem
/** 
 * The line item being returned in an order.
**/
export class OrderReturnLineItem extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=gross_return_money" })
  grossReturnMoney?: Money;

  @Metadata({ data: "json, name=item_type" })
  itemType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity: string;

  @Metadata({ data: "json, name=quantity_unit" })
  quantityUnit?: OrderQuantityUnit;

  @Metadata({ data: "json, name=return_modifiers", elemType: shared.OrderReturnLineItemModifier })
  returnModifiers?: OrderReturnLineItemModifier[];

  @Metadata({ data: "json, name=source_line_item_uid" })
  sourceLineItemUid?: string;

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
