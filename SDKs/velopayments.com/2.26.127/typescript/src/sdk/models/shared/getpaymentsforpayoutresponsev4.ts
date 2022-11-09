import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentResponseV4 } from "./paymentresponsev4";


// GetPaymentsForPayoutResponseV4
/** 
 * List Payments for payout
**/
export class GetPaymentsForPayoutResponseV4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PaymentResponseV4 })
  content?: PaymentResponseV4[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;

  @Metadata({ data: "json, name=summary" })
  summary?: any;
}
