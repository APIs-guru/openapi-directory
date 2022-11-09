import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventCreateReward
/** 
 * Provides metadata when the event `type` is `CREATE_REWARD`.
**/
export class LoyaltyEventCreateReward extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId: string;

  @Metadata({ data: "json, name=points" })
  points: number;

  @Metadata({ data: "json, name=reward_id" })
  rewardId?: string;
}
