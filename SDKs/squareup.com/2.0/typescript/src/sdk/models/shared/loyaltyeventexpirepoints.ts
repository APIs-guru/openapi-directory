import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventExpirePoints
/** 
 * Provides metadata when the event `type` is `EXPIRE_POINTS`.
**/
export class LoyaltyEventExpirePoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId: string;

  @Metadata({ data: "json, name=points" })
  points: number;
}
