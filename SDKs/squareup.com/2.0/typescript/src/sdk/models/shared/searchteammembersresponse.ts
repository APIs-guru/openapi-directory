import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMember } from "./teammember";


// SearchTeamMembersResponse
/** 
 * Represents a response from a search request containing a filtered list of `TeamMember` objects.
**/
export class SearchTeamMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_members", elemType: shared.TeamMember })
  teamMembers?: TeamMember[];
}
