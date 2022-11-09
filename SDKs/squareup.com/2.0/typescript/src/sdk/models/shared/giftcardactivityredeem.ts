import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityRedeem
/** 
 * Present only when `GiftCardActivityType` is REDEEM.
**/
export class GiftCardActivityRedeem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;
}
