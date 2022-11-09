import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventRedeemReward
/** 
 * Provides metadata when the event `type` is `REDEEM_REWARD`.
**/
export class LoyaltyEventRedeemReward extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=reward_id" })
  rewardId?: string;
}
