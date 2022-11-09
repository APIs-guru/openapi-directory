import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyAccount } from "./loyaltyaccount";


// RetrieveLoyaltyAccountResponse
/** 
 * A response that includes the loyalty account.
**/
export class RetrieveLoyaltyAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=loyalty_account" })
  loyaltyAccount?: LoyaltyAccount;
}
