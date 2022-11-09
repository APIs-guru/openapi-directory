import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisputedPayment
/** 
 * The payment the cardholder disputed.
**/
export class DisputedPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;
}
