import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamMember } from "./teammember";


// CreateTeamMemberRequest
/** 
 * Represents a create request for a `TeamMember` object.
**/
export class CreateTeamMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=team_member" })
  teamMember?: TeamMember;
}
