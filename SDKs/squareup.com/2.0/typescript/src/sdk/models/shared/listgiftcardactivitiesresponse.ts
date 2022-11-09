import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { GiftCardActivity } from "./giftcardactivity";


// ListGiftCardActivitiesResponse
/** 
 * A response that contains one or more `GiftCardActivity`. The response might contain a set of `Error` objects
 * if the request resulted in errors.
**/
export class ListGiftCardActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=gift_card_activities", elemType: shared.GiftCardActivity })
  giftCardActivities?: GiftCardActivity[];
}
