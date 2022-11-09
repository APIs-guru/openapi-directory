import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityAdjustDecrement
/** 
 * Describes a gift card activity of the ADJUST_DECREMENT type.
**/
export class GiftCardActivityAdjustDecrement extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=reason" })
  reason: any;
}
