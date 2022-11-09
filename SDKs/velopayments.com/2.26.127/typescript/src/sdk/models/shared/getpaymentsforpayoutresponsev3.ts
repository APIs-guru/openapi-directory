import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentResponseV3 } from "./paymentresponsev3";


// GetPaymentsForPayoutResponseV3
/** 
 * List Payments for payout
**/
export class GetPaymentsForPayoutResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PaymentResponseV3 })
  content?: PaymentResponseV3[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;

  @Metadata({ data: "json, name=summary" })
  summary?: any;
}
