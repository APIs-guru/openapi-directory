import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BusinessHoursPeriod
/** 
 * Represents a period of time during which a business location is open.
**/
export class BusinessHoursPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=day_of_week" })
  dayOfWeek?: string;

  @Metadata({ data: "json, name=end_local_time" })
  endLocalTime?: string;

  @Metadata({ data: "json, name=start_local_time" })
  startLocalTime?: string;
}
