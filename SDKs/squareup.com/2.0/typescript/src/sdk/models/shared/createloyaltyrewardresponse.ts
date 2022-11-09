import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyReward } from "./loyaltyreward";


// CreateLoyaltyRewardResponse
/** 
 * A response that includes the loyalty reward created.
**/
export class CreateLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=reward" })
  reward?: LoyaltyReward;
}
