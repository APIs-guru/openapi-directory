import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMemberWage } from "./teammemberwage";


// GetTeamMemberWageResponse
/** 
 * A response to a request to get a `TeamMemberWage`. The response contains
 * the requested `TeamMemberWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class GetTeamMemberWageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member_wage" })
  teamMemberWage?: TeamMemberWage;
}
