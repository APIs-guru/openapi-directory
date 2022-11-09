import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";


// LoyaltyEventDateTimeFilter
/** 
 * Filter events by date time range.
**/
export class LoyaltyEventDateTimeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: TimeRange;
}
