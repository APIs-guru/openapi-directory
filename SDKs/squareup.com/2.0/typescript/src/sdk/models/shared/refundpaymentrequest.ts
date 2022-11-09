import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// RefundPaymentRequest
/** 
 * Describes a request to refund a payment using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
**/
export class RefundPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=app_fee_money" })
  appFeeMoney?: Money;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
