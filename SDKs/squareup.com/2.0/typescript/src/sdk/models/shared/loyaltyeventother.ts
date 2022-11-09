import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventOther
/** 
 * Provides metadata when the event `type` is `OTHER`.
**/
export class LoyaltyEventOther extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId: string;

  @Metadata({ data: "json, name=points" })
  points: number;
}
