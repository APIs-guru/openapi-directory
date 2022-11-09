import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// OrderLineItemDiscount
/** 
 * Represents a discount that applies to one or more line items in an
 * order.
 * 
 * Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the
 * amount contributed by the item to the order subtotal.
**/
export class OrderLineItemDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: Money;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=pricing_rule_id" })
  pricingRuleId?: string;

  @Metadata({ data: "json, name=reward_ids" })
  rewardIds?: string[];

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
