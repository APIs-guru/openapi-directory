import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMemberWagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTeamMemberWageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamMemberWageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMemberWagePathParams;

  @Metadata()
  security: GetTeamMemberWageSecurity;
}


export class GetTeamMemberWageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTeamMemberWageResponse?: shared.GetTeamMemberWageResponse;

  @Metadata()
  statusCode: number;
}
