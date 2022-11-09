import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// TeamMemberWage
/** 
 * The hourly wage rate that a team member earns on a `Shift` for doing the job
 * specified by the `title` property of this object.
**/
export class TeamMemberWage extends SpeakeasyBase {
  @Metadata({ data: "json, name=hourly_rate" })
  hourlyRate?: Money;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=team_member_id" })
  teamMemberId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
