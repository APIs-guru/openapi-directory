import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveTeamMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_member_id" })
  teamMemberId: string;
}


export class RetrieveTeamMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveTeamMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveTeamMemberPathParams;

  @Metadata()
  security: RetrieveTeamMemberSecurity;
}


export class RetrieveTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveTeamMemberResponse?: shared.RetrieveTeamMemberResponse;

  @Metadata()
  statusCode: number;
}
