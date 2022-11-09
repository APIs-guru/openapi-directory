import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamMemberBookingProfile
/** 
 * The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider.
**/
export class TeamMemberBookingProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=is_bookable" })
  isBookable?: boolean;

  @Metadata({ data: "json, name=profile_image_url" })
  profileImageUrl?: string;

  @Metadata({ data: "json, name=team_member_id" })
  teamMemberId?: string;
}
