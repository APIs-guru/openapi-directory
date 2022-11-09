import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderReward
/** 
 * Represents a reward that can be applied to an order if the necessary
 * reward tier criteria are met. Rewards are created through the Loyalty API.
**/
export class OrderReward extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=reward_tier_id" })
  rewardTierId: string;
}
