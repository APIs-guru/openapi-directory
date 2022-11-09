import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";


// OrderMoneyAmounts
/** 
 * A collection of various money amounts.
**/
export class OrderMoneyAmounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=discount_money" })
  discountMoney?: Money;

  @Metadata({ data: "json, name=service_charge_money" })
  serviceChargeMoney?: Money;

  @Metadata({ data: "json, name=tax_money" })
  taxMoney?: Money;

  @Metadata({ data: "json, name=tip_money" })
  tipMoney?: Money;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;
}
