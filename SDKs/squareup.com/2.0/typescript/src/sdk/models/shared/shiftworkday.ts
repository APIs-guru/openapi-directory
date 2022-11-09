import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";


// ShiftWorkday
/** 
 * A `Shift` search query filter parameter that sets a range of days that
 * a `Shift` must start or end in before passing the filter condition.
**/
export class ShiftWorkday extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_range" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=default_timezone" })
  defaultTimezone?: string;

  @Metadata({ data: "json, name=match_shifts_by" })
  matchShiftsBy?: string;
}
