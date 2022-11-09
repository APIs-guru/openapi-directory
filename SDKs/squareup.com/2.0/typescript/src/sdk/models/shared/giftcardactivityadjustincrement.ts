import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityAdjustIncrement
/** 
 * Describes a gift card activity of the ADJUST_INCREMENT type.
**/
export class GiftCardActivityAdjustIncrement extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=reason" })
  reason: any;
}
