import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSkipUsersPlaybackToNextTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointSkipUsersPlaybackToNextTrackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSkipUsersPlaybackToNextTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSkipUsersPlaybackToNextTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSkipUsersPlaybackToNextTrackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSkipUsersPlaybackToNextTrackHeaders;

  @SpeakeasyMetadata()
  security: EndpointSkipUsersPlaybackToNextTrackSecurity;
}


export class EndpointSkipUsersPlaybackToNextTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
