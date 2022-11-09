import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoyaltyProgramAccrualRule } from "./loyaltyprogramaccrualrule";
import { LoyaltyProgramExpirationPolicy } from "./loyaltyprogramexpirationpolicy";
import { LoyaltyProgramRewardTier } from "./loyaltyprogramrewardtier";
import { LoyaltyProgramTerminology } from "./loyaltyprogramterminology";


// LoyaltyProgram
/** 
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards. 
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. 
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
**/
export class LoyaltyProgram extends SpeakeasyBase {
  @Metadata({ data: "json, name=accrual_rules", elemType: shared.LoyaltyProgramAccrualRule })
  accrualRules: LoyaltyProgramAccrualRule[];

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=expiration_policy" })
  expirationPolicy?: LoyaltyProgramExpirationPolicy;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location_ids" })
  locationIds: string[];

  @Metadata({ data: "json, name=reward_tiers", elemType: shared.LoyaltyProgramRewardTier })
  rewardTiers: LoyaltyProgramRewardTier[];

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=terminology" })
  terminology: LoyaltyProgramTerminology;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;
}
