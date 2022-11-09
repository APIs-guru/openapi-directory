import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { GiftCardActivity } from "./giftcardactivity";


// CreateGiftCardActivityResponse
/** 
 * A response that contains a `GiftCardActivity` that was created.
 * The response might contain a set of `Error` objects if the request resulted in errors.
**/
export class CreateGiftCardActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=gift_card_activity" })
  giftCardActivity?: GiftCardActivity;
}
