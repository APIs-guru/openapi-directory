import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchTeamMembersQuery } from "./searchteammembersquery";


// SearchTeamMembersRequest
/** 
 * Represents a search request for a filtered list of `TeamMember` objects.
**/
export class SearchTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: SearchTeamMembersQuery;
}
