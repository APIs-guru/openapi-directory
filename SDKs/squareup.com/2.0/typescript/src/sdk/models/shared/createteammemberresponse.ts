import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMember } from "./teammember";


// CreateTeamMemberResponse
/** 
 * Represents a response from a create request containing the created `TeamMember` object or error messages.
**/
export class CreateTeamMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member" })
  teamMember?: TeamMember;
}
