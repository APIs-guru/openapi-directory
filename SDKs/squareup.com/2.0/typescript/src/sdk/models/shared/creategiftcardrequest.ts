import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GiftCard } from "./giftcard";


// CreateGiftCardRequest
/** 
 * A request to create a gift card.
**/
export class CreateGiftCardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gift_card" })
  giftCard: GiftCard;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;
}
