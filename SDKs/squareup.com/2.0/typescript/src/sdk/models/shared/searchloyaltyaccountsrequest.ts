import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchLoyaltyAccountsRequestLoyaltyAccountQuery } from "./searchloyaltyaccountsrequestloyaltyaccountquery";


// SearchLoyaltyAccountsRequest
/** 
 * A request to search for loyalty accounts.
**/
export class SearchLoyaltyAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
}
