import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyReward } from "./loyaltyreward";


// SearchLoyaltyRewardsResponse
/** 
 * A response that includes the loyalty rewards satisfying the search criteria.
**/
export class SearchLoyaltyRewardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=rewards", elemType: shared.LoyaltyReward })
  rewards?: LoyaltyReward[];
}
