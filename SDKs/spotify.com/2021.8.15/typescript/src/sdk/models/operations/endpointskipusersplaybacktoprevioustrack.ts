import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSkipUsersPlaybackToPreviousTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointSkipUsersPlaybackToPreviousTrackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSkipUsersPlaybackToPreviousTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSkipUsersPlaybackToPreviousTrackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSkipUsersPlaybackToPreviousTrackQueryParams;

  @Metadata()
  headers: EndpointSkipUsersPlaybackToPreviousTrackHeaders;

  @Metadata()
  security: EndpointSkipUsersPlaybackToPreviousTrackSecurity;
}


export class EndpointSkipUsersPlaybackToPreviousTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
