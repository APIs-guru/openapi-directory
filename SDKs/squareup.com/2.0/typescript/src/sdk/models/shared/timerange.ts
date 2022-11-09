import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * Represents a generic time range. The start and end values are
 * represented in RFC 3339 format. Time ranges are customized to be
 * inclusive or exclusive based on the needs of a particular endpoint.
 * Refer to the relevant endpoint-specific documentation to determine
 * how time ranges are handled.
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_at" })
  endAt?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt?: string;
}
