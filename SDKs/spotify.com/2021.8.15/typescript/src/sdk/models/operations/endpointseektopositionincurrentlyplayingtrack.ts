import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position_ms" })
  positionMs: number;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams;

  @Metadata()
  headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders;

  @Metadata()
  security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
