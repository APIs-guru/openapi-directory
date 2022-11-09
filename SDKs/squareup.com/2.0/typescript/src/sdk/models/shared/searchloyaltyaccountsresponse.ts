import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyAccount } from "./loyaltyaccount";


// SearchLoyaltyAccountsResponse
/** 
 * A response that includes loyalty accounts that satisfy the search criteria.
**/
export class SearchLoyaltyAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=loyalty_accounts", elemType: shared.LoyaltyAccount })
  loyaltyAccounts?: LoyaltyAccount[];
}
