import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkUpdateTeamMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BulkUpdateTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkUpdateTeamMembersRequest;

  @Metadata()
  security: BulkUpdateTeamMembersSecurity;
}


export class BulkUpdateTeamMembersResponse extends SpeakeasyBase {
  @Metadata()
  bulkUpdateTeamMembersResponse?: shared.BulkUpdateTeamMembersResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
