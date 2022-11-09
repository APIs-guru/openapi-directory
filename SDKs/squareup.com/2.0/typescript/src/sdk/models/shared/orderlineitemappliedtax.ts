import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// OrderLineItemAppliedTax
/** 
 * Represents an applied portion of a tax to a line item in an order.
 * 
 * Order-scoped taxes automatically include the applied taxes in each line item.
 * Line item taxes must be referenced from any applicable line items.
 * The corresponding applied money is automatically computed, based on the
 * set of participating line items.
**/
export class OrderLineItemAppliedTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: Money;

  @Metadata({ data: "json, name=tax_uid" })
  taxUid: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
