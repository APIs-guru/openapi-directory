import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CardPaymentTimeline
/** 
 * The timeline for card payments.
**/
export class CardPaymentTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_at" })
  authorizedAt?: string;

  @Metadata({ data: "json, name=captured_at" })
  capturedAt?: string;

  @Metadata({ data: "json, name=voided_at" })
  voidedAt?: string;
}
