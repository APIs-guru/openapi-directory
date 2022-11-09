import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventLoyaltyAccountFilter
/** 
 * Filter events by loyalty account.
**/
export class LoyaltyEventLoyaltyAccountFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_account_id" })
  loyaltyAccountId: string;
}
