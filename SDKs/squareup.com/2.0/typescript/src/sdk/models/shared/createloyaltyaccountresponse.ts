import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyAccount } from "./loyaltyaccount";


// CreateLoyaltyAccountResponse
/** 
 * A response that includes loyalty account created.
**/
export class CreateLoyaltyAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=loyalty_account" })
  loyaltyAccount?: LoyaltyAccount;
}
