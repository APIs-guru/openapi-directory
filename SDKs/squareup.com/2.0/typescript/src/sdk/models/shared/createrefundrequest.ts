import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CreateRefundRequest
/** 
 * Defines the body parameters that can be included in
 * a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
 * 
 * Deprecated - recommend using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment)
**/
export class CreateRefundRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=tender_id" })
  tenderId: string;
}
