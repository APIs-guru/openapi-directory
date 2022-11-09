import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyProgramRewardDefinition } from "./loyaltyprogramrewarddefinition";
import { CatalogObjectReference } from "./catalogobjectreference";


// LoyaltyProgramRewardTier
/** 
 * Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers.
**/
export class LoyaltyProgramRewardTier extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=definition" })
  definition: LoyaltyProgramRewardDefinition;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=points" })
  points: number;

  @Metadata({ data: "json, name=pricing_rule_reference" })
  pricingRuleReference?: CatalogObjectReference;
}
