import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CalculateLoyaltyPointsRequest
/** 
 * A request to calculate the points that a buyer can earn from 
 * a specified purchase.
**/
export class CalculateLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=transaction_amount_money" })
  transactionAmountMoney?: Money;
}
