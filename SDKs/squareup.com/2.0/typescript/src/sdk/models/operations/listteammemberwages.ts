import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTeamMemberWagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team_member_id" })
  teamMemberId?: string;
}


export class ListTeamMemberWagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListTeamMemberWagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTeamMemberWagesQueryParams;

  @Metadata()
  security: ListTeamMemberWagesSecurity;
}


export class ListTeamMemberWagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTeamMemberWagesResponse?: shared.ListTeamMemberWagesResponse;

  @Metadata()
  statusCode: number;
}
