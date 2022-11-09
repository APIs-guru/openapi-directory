import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payment } from "./payment";


// UpdatePaymentRequest
/** 
 * Describes a request to update a payment using 
 * [UpdatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/update-payment).
**/
export class UpdatePaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=payment" })
  payment?: Payment;
}
