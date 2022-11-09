import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentFilter } from "./segmentfilter";
import { TimeRange } from "./timerange";


// SearchAvailabilityFilter
/** 
 * A query filter to search for availabilities by.
**/
export class SearchAvailabilityFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=booking_id" })
  bookingId?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=segment_filters", elemType: shared.SegmentFilter })
  segmentFilters?: SegmentFilter[];

  @Metadata({ data: "json, name=start_at_range" })
  startAtRange: TimeRange;
}
