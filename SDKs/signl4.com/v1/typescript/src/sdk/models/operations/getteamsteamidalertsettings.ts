import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdAlertSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdAlertSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdAlertSettingsPathParams;
}


export class GetTeamsTeamIdAlertSettingsResponse extends SpeakeasyBase {
  @Metadata()
  alertSettings?: shared.AlertSettings;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
