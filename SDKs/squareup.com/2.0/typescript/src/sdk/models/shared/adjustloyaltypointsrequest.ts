import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventAdjustPoints } from "./loyaltyeventadjustpoints";


// AdjustLoyaltyPointsRequest
/** 
 * A request to adjust (add or subtract) points manually.
**/
export class AdjustLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjust_points" })
  adjustPoints: LoyaltyEventAdjustPoints;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
