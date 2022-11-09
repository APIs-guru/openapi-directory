import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateTeamMemberRequest } from "./createteammemberrequest";


// BulkCreateTeamMembersRequest
/** 
 * Represents a bulk create request for `TeamMember` objects.
**/
export class BulkCreateTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=team_members", elemType: shared.CreateTeamMemberRequest })
  teamMembers: Map<string, CreateTeamMemberRequest>;
}
