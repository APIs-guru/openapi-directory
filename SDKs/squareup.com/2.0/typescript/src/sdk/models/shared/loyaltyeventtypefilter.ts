import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventTypeFilter
/** 
 * Filter events by event type.
**/
export class LoyaltyEventTypeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=types" })
  types: string[];
}
