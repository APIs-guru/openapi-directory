import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// CancelPaymentByIdempotencyKeyResponse
/** 
 * Defines the response returned by 
 * [CancelPaymentByIdempotencyKey](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment-by-idempotency-key).
 * On success, `errors` is empty.
**/
export class CancelPaymentByIdempotencyKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
