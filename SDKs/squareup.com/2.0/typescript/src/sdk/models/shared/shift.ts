import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Break } from "./break";
import { ShiftWage } from "./shiftwage";


// Shift
/** 
 * A record of the hourly rate, start, and end times for a single work shift
 * for an employee. This might include a record of the start and end times for breaks
 * taken during the shift.
**/
export class Shift extends SpeakeasyBase {
  @Metadata({ data: "json, name=breaks", elemType: shared.Break })
  breaks?: Break[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=end_at" })
  endAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=team_member_id" })
  teamMemberId?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=wage" })
  wage?: ShiftWage;
}
