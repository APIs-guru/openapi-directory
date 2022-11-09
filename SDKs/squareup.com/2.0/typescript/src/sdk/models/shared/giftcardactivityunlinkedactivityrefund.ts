import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityUnlinkedActivityRefund
/** 
 * Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND.
**/
export class GiftCardActivityUnlinkedActivityRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;
}
