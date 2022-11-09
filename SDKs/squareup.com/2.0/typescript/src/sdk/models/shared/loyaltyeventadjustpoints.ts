import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventAdjustPoints
/** 
 * Provides metadata when the event `type` is `ADJUST_POINTS`.
**/
export class LoyaltyEventAdjustPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId?: string;

  @Metadata({ data: "json, name=points" })
  points: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
