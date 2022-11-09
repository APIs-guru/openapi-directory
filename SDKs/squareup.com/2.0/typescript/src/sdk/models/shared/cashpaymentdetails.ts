import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// CashPaymentDetails
/** 
 * Stores details about a cash payment. Contains only non-confidential information. For more information, see 
 * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
**/
export class CashPaymentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer_supplied_money" })
  buyerSuppliedMoney: Money;

  @Metadata({ data: "json, name=change_back_money" })
  changeBackMoney?: Money;
}
