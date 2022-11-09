import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";


// AdjustLoyaltyPointsResponse
/** 
 * A response that includes the loyalty event that 
 * resulted from the successful API call.
**/
export class AdjustLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=event" })
  event?: LoyaltyEvent;
}
