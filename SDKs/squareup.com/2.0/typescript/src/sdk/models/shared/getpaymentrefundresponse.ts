import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { PaymentRefund } from "./paymentrefund";


// GetPaymentRefundResponse
/** 
 * Defines the response returned by [GetRefund](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/get-payment-refund).
 * 
 * Note: If there are errors processing the request, the refund field might not be
 * present or it might be present in a FAILED state.
**/
export class GetPaymentRefundResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refund" })
  refund?: PaymentRefund;
}
