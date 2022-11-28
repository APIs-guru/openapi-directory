import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdAlertSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdAlertSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  alertSettings?: shared.AlertSettings;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  alertSettings1?: shared.AlertSettings;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  alertSettings2?: shared.AlertSettings;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  alertSettings3?: shared.AlertSettings;
}


export class PostTeamsTeamIdAlertSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdAlertSettingsPathParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdAlertSettingsRequests;
}


export class PostTeamsTeamIdAlertSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertSettings?: shared.AlertSettings;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
