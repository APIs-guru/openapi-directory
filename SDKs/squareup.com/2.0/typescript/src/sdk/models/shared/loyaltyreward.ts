import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyReward
/** 
 * Represents a contract to redeem loyalty points for a [reward tier](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state. For more information, see [Redeem loyalty rewards](https://developer.squareup.com/docs/loyalty-api/overview#redeem-loyalty-rewards).
**/
export class LoyaltyReward extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=loyalty_account_id" })
  loyaltyAccountId: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=redeemed_at" })
  redeemedAt?: string;

  @Metadata({ data: "json, name=reward_tier_id" })
  rewardTierId: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
