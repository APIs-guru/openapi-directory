import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyReward } from "./loyaltyreward";


// CreateLoyaltyRewardRequest
/** 
 * A request to create a loyalty reward.
**/
export class CreateLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=reward" })
  reward: LoyaltyReward;
}
