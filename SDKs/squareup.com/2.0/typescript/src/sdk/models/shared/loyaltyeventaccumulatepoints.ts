import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventAccumulatePoints
/** 
 * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
**/
export class LoyaltyEventAccumulatePoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyalty_program_id" })
  loyaltyProgramId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=points" })
  points?: number;
}
