import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkTokenCreateRequestPaymentInitiation
/** 
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array.
**/
export class LinkTokenCreateRequestPaymentInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;
}
