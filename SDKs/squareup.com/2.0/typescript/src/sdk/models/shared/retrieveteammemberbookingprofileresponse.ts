import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TeamMemberBookingProfile } from "./teammemberbookingprofile";


export class RetrieveTeamMemberBookingProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=team_member_booking_profile" })
  teamMemberBookingProfile?: TeamMemberBookingProfile;
}
