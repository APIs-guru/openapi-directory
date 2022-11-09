import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchAvailabilityFilter } from "./searchavailabilityfilter";


// SearchAvailabilityQuery
/** 
 * Query conditions to search for availabilities of bookings.
**/
export class SearchAvailabilityQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter: SearchAvailabilityFilter;
}
