import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTeamMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTeamMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTeamMemberRequest;

  @Metadata()
  security: CreateTeamMemberSecurity;
}


export class CreateTeamMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTeamMemberResponse?: shared.CreateTeamMemberResponse;

  @Metadata()
  statusCode: number;
}
