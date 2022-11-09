import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";


// RedeemLoyaltyRewardResponse
/** 
 * A response that includes the `LoyaltyEvent` published for redeeming the reward.
**/
export class RedeemLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=event" })
  event?: LoyaltyEvent;
}
