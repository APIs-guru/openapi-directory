import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV3 } from "./paymentresponsev3";



// GetPaymentsForPayoutResponseV3
/** 
 * List Payments for payout
**/
export class GetPaymentsForPayoutResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentResponseV3 })
  content?: PaymentResponseV3[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: any;
}
