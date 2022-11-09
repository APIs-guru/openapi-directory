import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchTeamMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchTeamMembersRequest;

  @Metadata()
  security: SearchTeamMembersSecurity;
}


export class SearchTeamMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchTeamMembersResponse?: shared.SearchTeamMembersResponse;

  @Metadata()
  statusCode: number;
}
