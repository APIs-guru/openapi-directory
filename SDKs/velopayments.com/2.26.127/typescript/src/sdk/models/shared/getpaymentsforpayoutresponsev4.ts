import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV4 } from "./paymentresponsev4";



// GetPaymentsForPayoutResponseV4
/** 
 * List Payments for payout
**/
export class GetPaymentsForPayoutResponseV4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentResponseV4 })
  content?: PaymentResponseV4[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: any;
}
