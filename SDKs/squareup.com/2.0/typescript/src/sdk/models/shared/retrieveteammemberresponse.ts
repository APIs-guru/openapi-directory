import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMember } from "./teammember";


// RetrieveTeamMemberResponse
/** 
 * Represents a response from a retrieve request containing a `TeamMember` object or error messages.
**/
export class RetrieveTeamMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member" })
  teamMember?: TeamMember;
}
