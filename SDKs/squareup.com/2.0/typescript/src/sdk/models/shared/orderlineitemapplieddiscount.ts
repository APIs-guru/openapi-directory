import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// OrderLineItemAppliedDiscount
/** 
 * Represents an applied portion of a discount to a line item in an order.
 * 
 * Order scoped discounts have automatically applied discounts present for each line item.
 * Line-item scoped discounts must have applied discounts added manually for any applicable line
 * items. The corresponding applied money is automatically computed based on participating
 * line items.
**/
export class OrderLineItemAppliedDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: Money;

  @Metadata({ data: "json, name=discount_uid" })
  discountUid: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
