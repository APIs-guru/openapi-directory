import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { GiftCard } from "./giftcard";


// ListGiftCardsResponse
/** 
 * A response that contains one or more `GiftCard`. The response might contain a set of `Error`
 * objects if the request resulted in errors.
**/
export class ListGiftCardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=gift_cards", elemType: shared.GiftCard })
  giftCards?: GiftCard[];
}
