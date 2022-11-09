import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateTeamMemberRequest } from "./updateteammemberrequest";


// BulkUpdateTeamMembersRequest
/** 
 * Represents a bulk update request for `TeamMember` objects.
**/
export class BulkUpdateTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=team_members", elemType: shared.UpdateTeamMemberRequest })
  teamMembers: Map<string, UpdateTeamMemberRequest>;
}
