import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMemberWage } from "./teammemberwage";


// ListTeamMemberWagesResponse
/** 
 * The response to a request for a set of `TeamMemberWage` objects. The response contains
 * a set of `TeamMemberWage` objects.
**/
export class ListTeamMemberWagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member_wages", elemType: shared.TeamMemberWage })
  teamMemberWages?: TeamMemberWage[];
}
