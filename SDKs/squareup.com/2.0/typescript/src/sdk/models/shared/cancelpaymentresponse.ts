import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Payment } from "./payment";


// CancelPaymentResponse
/** 
 * Defines the response returned by [CancelPayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment).
**/
export class CancelPaymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=payment" })
  payment?: Payment;
}
