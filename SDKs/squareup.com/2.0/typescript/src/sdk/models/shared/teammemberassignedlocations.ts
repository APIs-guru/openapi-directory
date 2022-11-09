import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamMemberAssignedLocations
/** 
 * An object that represents a team member's assignment to locations.
**/
export class TeamMemberAssignedLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignment_type" })
  assignmentType?: string;

  @Metadata({ data: "json, name=location_ids" })
  locationIds?: string[];
}
