import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSkipUsersPlaybackToNextTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointSkipUsersPlaybackToNextTrackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSkipUsersPlaybackToNextTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSkipUsersPlaybackToNextTrackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSkipUsersPlaybackToNextTrackQueryParams;

  @Metadata()
  headers: EndpointSkipUsersPlaybackToNextTrackHeaders;

  @Metadata()
  security: EndpointSkipUsersPlaybackToNextTrackSecurity;
}


export class EndpointSkipUsersPlaybackToNextTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
