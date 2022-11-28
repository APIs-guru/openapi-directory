import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointPauseAUsersPlaybackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointPauseAUsersPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointPauseAUsersPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointPauseAUsersPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointPauseAUsersPlaybackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointPauseAUsersPlaybackHeaders;

  @SpeakeasyMetadata()
  security: EndpointPauseAUsersPlaybackSecurity;
}


export class EndpointPauseAUsersPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
