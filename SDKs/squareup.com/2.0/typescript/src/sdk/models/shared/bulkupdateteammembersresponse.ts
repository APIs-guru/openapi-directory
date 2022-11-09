import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { UpdateTeamMemberResponse } from "./updateteammemberresponse";


// BulkUpdateTeamMembersResponse
/** 
 * Represents a response from a bulk update request containing the updated `TeamMember` objects or error messages.
**/
export class BulkUpdateTeamMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_members", elemType: shared.UpdateTeamMemberResponse })
  teamMembers?: Map<string, UpdateTeamMemberResponse>;
}
