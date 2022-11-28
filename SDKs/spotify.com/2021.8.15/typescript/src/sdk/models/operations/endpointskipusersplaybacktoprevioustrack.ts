import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSkipUsersPlaybackToPreviousTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointSkipUsersPlaybackToPreviousTrackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSkipUsersPlaybackToPreviousTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSkipUsersPlaybackToPreviousTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSkipUsersPlaybackToPreviousTrackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSkipUsersPlaybackToPreviousTrackHeaders;

  @SpeakeasyMetadata()
  security: EndpointSkipUsersPlaybackToPreviousTrackSecurity;
}


export class EndpointSkipUsersPlaybackToPreviousTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
