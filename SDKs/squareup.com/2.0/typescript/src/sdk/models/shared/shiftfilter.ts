import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
import { TimeRange } from "./timerange";
import { ShiftWorkday } from "./shiftworkday";


// ShiftFilter
/** 
 * Defines a filter used in a search for `Shift` records. `AND` logic is
 * used by Square's servers to apply each filter property specified.
**/
export class ShiftFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee_ids" })
  employeeIds?: string[];

  @Metadata({ data: "json, name=end" })
  end?: TimeRange;

  @Metadata({ data: "json, name=location_ids" })
  locationIds: string[];

  @Metadata({ data: "json, name=start" })
  start?: TimeRange;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=team_member_ids" })
  teamMemberIds: string[];

  @Metadata({ data: "json, name=workday" })
  workday?: ShiftWorkday;
}
