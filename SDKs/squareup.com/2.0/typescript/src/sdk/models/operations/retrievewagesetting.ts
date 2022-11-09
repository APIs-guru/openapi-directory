import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveWageSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_member_id" })
  teamMemberId: string;
}


export class RetrieveWageSettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveWageSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveWageSettingPathParams;

  @Metadata()
  security: RetrieveWageSettingSecurity;
}


export class RetrieveWageSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveWageSettingResponse?: shared.RetrieveWageSettingResponse;

  @Metadata()
  statusCode: number;
}
