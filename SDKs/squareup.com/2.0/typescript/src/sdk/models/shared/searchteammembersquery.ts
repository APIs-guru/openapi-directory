import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchTeamMembersFilter } from "./searchteammembersfilter";


// SearchTeamMembersQuery
/** 
 * Represents the parameters in a search for `TeamMember` objects.
**/
export class SearchTeamMembersQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: SearchTeamMembersFilter;
}
