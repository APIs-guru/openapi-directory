import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyReward } from "./loyaltyreward";


// RetrieveLoyaltyRewardResponse
/** 
 * A response that includes the loyalty reward.
**/
export class RetrieveLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=reward" })
  reward?: LoyaltyReward;
}
