import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventAccumulatePoints } from "./loyaltyeventaccumulatepoints";


// AccumulateLoyaltyPointsRequest
/** 
 * A request to accumulate points for a purchase.
**/
export class AccumulateLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accumulate_points" })
  accumulatePoints: LoyaltyEventAccumulatePoints;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;
}
