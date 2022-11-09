import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CreateTeamMemberResponse } from "./createteammemberresponse";


// BulkCreateTeamMembersResponse
/** 
 * Represents a response from a bulk create request containing the created `TeamMember` objects or error messages.
**/
export class BulkCreateTeamMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_members", elemType: shared.CreateTeamMemberResponse })
  teamMembers?: Map<string, CreateTeamMemberResponse>;
}
