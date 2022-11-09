import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoyaltyAccountMapping } from "./loyaltyaccountmapping";


// SearchLoyaltyAccountsRequestLoyaltyAccountQuery
/** 
 * The search criteria for the loyalty accounts.
**/
export class SearchLoyaltyAccountsRequestLoyaltyAccountQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_ids" })
  customerIds?: string[];

  @Metadata({ data: "json, name=mappings", elemType: shared.LoyaltyAccountMapping })
  mappings?: LoyaltyAccountMapping[];
}
