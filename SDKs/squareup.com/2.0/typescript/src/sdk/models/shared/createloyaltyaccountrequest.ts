import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyAccount } from "./loyaltyaccount";


// CreateLoyaltyAccountRequest
/** 
 * A request to create a new loyalty account.
**/
export class CreateLoyaltyAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=loyalty_account" })
  loyaltyAccount: LoyaltyAccount;
}
