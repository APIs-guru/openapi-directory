import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { PaymentRefund } from "./paymentrefund";


// RefundPaymentResponse
/** 
 * Defines the response returned by 
 * [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
 * 
 * If there are errors processing the request, the `refund` field might not be
 * present, or it might be present with a status of `FAILED`.
**/
export class RefundPaymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refund" })
  refund?: PaymentRefund;
}
