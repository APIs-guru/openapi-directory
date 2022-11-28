import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSetRepeatModeOnUsersPlaybackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class EndpointSetRepeatModeOnUsersPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSetRepeatModeOnUsersPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSetRepeatModeOnUsersPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSetRepeatModeOnUsersPlaybackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSetRepeatModeOnUsersPlaybackHeaders;

  @SpeakeasyMetadata()
  security: EndpointSetRepeatModeOnUsersPlaybackSecurity;
}


export class EndpointSetRepeatModeOnUsersPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
