import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityRefund
/** 
 * Present only when `GiftCardActivityType` is REFUND.
**/
export class GiftCardActivityRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=redeem_activity_id" })
  redeemActivityId: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;
}
