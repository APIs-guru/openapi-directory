import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventLocationFilter
/** 
 * Filter events by location.
**/
export class LoyaltyEventLocationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=location_ids" })
  locationIds: string[];
}
