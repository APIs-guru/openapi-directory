import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamMember } from "./teammember";


// UpdateTeamMemberRequest
/** 
 * Represents an update request for a `TeamMember` object.
**/
export class UpdateTeamMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=team_member" })
  teamMember?: TeamMember;
}
