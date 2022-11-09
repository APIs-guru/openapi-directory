import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";


// AccumulateLoyaltyPointsResponse
/** 
 * A response containing the resulting loyalty event.
**/
export class AccumulateLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=event" })
  event?: LoyaltyEvent;
}
