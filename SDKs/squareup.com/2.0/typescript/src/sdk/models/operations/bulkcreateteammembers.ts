import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkCreateTeamMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BulkCreateTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateTeamMembersRequest;

  @Metadata()
  security: BulkCreateTeamMembersSecurity;
}


export class BulkCreateTeamMembersResponse extends SpeakeasyBase {
  @Metadata()
  bulkCreateTeamMembersResponse?: shared.BulkCreateTeamMembersResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
