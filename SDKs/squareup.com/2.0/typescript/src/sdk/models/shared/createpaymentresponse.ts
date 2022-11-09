import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Payment } from "./payment";


// CreatePaymentResponse
/** 
 * Defines the response returned by [CreatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
 * 
 * If there are errors processing the request, the `payment` field might not be
 * present, or it might be present with a status of `FAILED`.
**/
export class CreatePaymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=payment" })
  payment?: Payment;
}
