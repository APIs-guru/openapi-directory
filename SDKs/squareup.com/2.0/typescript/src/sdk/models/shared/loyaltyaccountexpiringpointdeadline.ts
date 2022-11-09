import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyAccountExpiringPointDeadline
/** 
 * Represents a set of points for a loyalty account that are scheduled to expire on a specific date.
**/
export class LoyaltyAccountExpiringPointDeadline extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @Metadata({ data: "json, name=points" })
  points: number;
}
