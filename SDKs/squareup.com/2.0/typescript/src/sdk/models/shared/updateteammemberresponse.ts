import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMember } from "./teammember";


// UpdateTeamMemberResponse
/** 
 * Represents a response from an update request containing the updated `TeamMember` object or error messages.
**/
export class UpdateTeamMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member" })
  teamMember?: TeamMember;
}
