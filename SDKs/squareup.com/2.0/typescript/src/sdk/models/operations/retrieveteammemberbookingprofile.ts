import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveTeamMemberBookingProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_member_id" })
  teamMemberId: string;
}


export class RetrieveTeamMemberBookingProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveTeamMemberBookingProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveTeamMemberBookingProfilePathParams;

  @Metadata()
  security: RetrieveTeamMemberBookingProfileSecurity;
}


export class RetrieveTeamMemberBookingProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveTeamMemberBookingProfileResponse?: shared.RetrieveTeamMemberBookingProfileResponse;

  @Metadata()
  statusCode: number;
}
