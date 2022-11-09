import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelPaymentByIdempotencyKeyRequest
/** 
 * Describes a request to cancel a payment using 
 * [CancelPaymentByIdempotencyKey](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment-by-idempotency-key).
**/
export class CancelPaymentByIdempotencyKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
