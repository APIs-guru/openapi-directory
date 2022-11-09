import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { PaymentRefund } from "./paymentrefund";


// ListPaymentRefundsResponse
/** 
 * Defines the response returned by [ListPaymentRefunds](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/list-payment-refunds).
 * 
 * Either `errors` or `refunds` is present in a given response (never both).
**/
export class ListPaymentRefundsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refunds", elemType: shared.PaymentRefund })
  refunds?: PaymentRefund[];
}
