import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventAccumulatePoints } from "./loyaltyeventaccumulatepoints";
import { LoyaltyEventAdjustPoints } from "./loyaltyeventadjustpoints";
import { LoyaltyEventCreateReward } from "./loyaltyeventcreatereward";
import { LoyaltyEventDeleteReward } from "./loyaltyeventdeletereward";
import { LoyaltyEventExpirePoints } from "./loyaltyeventexpirepoints";
import { LoyaltyEventOther } from "./loyaltyeventother";
import { LoyaltyEventRedeemReward } from "./loyaltyeventredeemreward";


// LoyaltyEvent
/** 
 * Provides information about a loyalty event. 
 * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
**/
export class LoyaltyEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=accumulate_points" })
  accumulatePoints?: LoyaltyEventAccumulatePoints;

  @Metadata({ data: "json, name=adjust_points" })
  adjustPoints?: LoyaltyEventAdjustPoints;

  @Metadata({ data: "json, name=create_reward" })
  createReward?: LoyaltyEventCreateReward;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=delete_reward" })
  deleteReward?: LoyaltyEventDeleteReward;

  @Metadata({ data: "json, name=expire_points" })
  expirePoints?: LoyaltyEventExpirePoints;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=loyalty_account_id" })
  loyaltyAccountId: string;

  @Metadata({ data: "json, name=other_event" })
  otherEvent?: LoyaltyEventOther;

  @Metadata({ data: "json, name=redeem_reward" })
  redeemReward?: LoyaltyEventRedeemReward;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
