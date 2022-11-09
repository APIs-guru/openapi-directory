import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchLoyaltyRewardsRequestLoyaltyRewardQuery
/** 
 * The set of search requirements.
**/
export class SearchLoyaltyRewardsRequestLoyaltyRewardQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_account_id" })
  loyaltyAccountId: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
