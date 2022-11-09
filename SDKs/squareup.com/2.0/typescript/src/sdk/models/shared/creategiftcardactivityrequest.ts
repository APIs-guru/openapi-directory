import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GiftCardActivity } from "./giftcardactivity";


// CreateGiftCardActivityRequest
/** 
 * A request to create a gift card activity.
**/
export class CreateGiftCardActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gift_card_activity" })
  giftCardActivity: GiftCardActivity;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
