import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWageSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_member_id" })
  teamMemberId: string;
}


export class UpdateWageSettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateWageSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWageSettingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWageSettingRequest;

  @Metadata()
  security: UpdateWageSettingSecurity;
}


export class UpdateWageSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWageSettingResponse?: shared.UpdateWageSettingResponse;
}
