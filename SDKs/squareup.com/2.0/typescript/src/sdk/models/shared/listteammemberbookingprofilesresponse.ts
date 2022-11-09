import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMemberBookingProfile } from "./teammemberbookingprofile";


export class ListTeamMemberBookingProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member_booking_profiles", elemType: shared.TeamMemberBookingProfile })
  teamMemberBookingProfiles?: TeamMemberBookingProfile[];
}
