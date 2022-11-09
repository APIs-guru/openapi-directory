import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// OrderRoundingAdjustment
/** 
 * A rounding adjustment of the money being returned. Commonly used to apply cash rounding
 * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
**/
export class OrderRoundingAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
