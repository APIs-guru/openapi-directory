import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdAlertSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdAlertSettingsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  alertSettings?: shared.AlertSettings;

  @Metadata({ data: "request, media_type=application/json" })
  alertSettings1?: shared.AlertSettings;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  alertSettings2?: shared.AlertSettings;

  @Metadata({ data: "request, media_type=text/json" })
  alertSettings3?: shared.AlertSettings;
}


export class PostTeamsTeamIdAlertSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdAlertSettingsPathParams;

  @Metadata()
  request?: PostTeamsTeamIdAlertSettingsRequests;
}


export class PostTeamsTeamIdAlertSettingsResponse extends SpeakeasyBase {
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
