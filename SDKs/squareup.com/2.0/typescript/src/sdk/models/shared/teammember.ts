import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamMemberAssignedLocations } from "./teammemberassignedlocations";


// TeamMember
/** 
 * A record representing an individual team member for a business.
**/
export class TeamMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigned_locations" })
  assignedLocations?: TeamMemberAssignedLocations;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_owner" })
  isOwner?: boolean;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
