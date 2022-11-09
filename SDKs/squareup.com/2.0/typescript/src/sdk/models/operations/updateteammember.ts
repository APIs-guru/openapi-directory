import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTeamMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_member_id" })
  teamMemberId: string;
}


export class UpdateTeamMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateTeamMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTeamMemberPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTeamMemberRequest;

  @Metadata()
  security: UpdateTeamMemberSecurity;
}


export class UpdateTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTeamMemberResponse?: shared.UpdateTeamMemberResponse;
}
