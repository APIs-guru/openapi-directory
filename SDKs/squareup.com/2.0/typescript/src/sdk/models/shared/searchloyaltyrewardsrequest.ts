import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchLoyaltyRewardsRequestLoyaltyRewardQuery } from "./searchloyaltyrewardsrequestloyaltyrewardquery";


// SearchLoyaltyRewardsRequest
/** 
 * A request to search for loyalty rewards.
**/
export class SearchLoyaltyRewardsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
}
