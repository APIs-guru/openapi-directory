import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventDeleteReward
/** 
 * Provides metadata when the event `type` is `DELETE_REWARD`.
**/
export class LoyaltyEventDeleteReward extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId: string;

  @Metadata({ data: "json, name=points" })
  points: number;

  @Metadata({ data: "json, name=reward_id" })
  rewardId?: string;
}
