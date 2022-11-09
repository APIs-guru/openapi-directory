import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// OrderLineItemTax
/** 
 * Represents a tax that applies to one or more line item in the order.
 * 
 * Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount the item
 * contributes to the order subtotal.
**/
export class OrderLineItemTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: Money;

  @Metadata({ data: "json, name=auto_applied" })
  autoApplied?: boolean;

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

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
