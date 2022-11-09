import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyProgramExpirationPolicy
/** 
 * Describes when the loyalty program expires.
**/
export class LoyaltyProgramExpirationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration_duration" })
  expirationDuration: string;
}
