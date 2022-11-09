import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { GiftCard } from "./giftcard";


// CreateGiftCardResponse
/** 
 * A response that contains a `GiftCard`. The response might contain a set of `Error` objects if the request
 * resulted in errors.
**/
export class CreateGiftCardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=gift_card" })
  giftCard?: GiftCard;
}
