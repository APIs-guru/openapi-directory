import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position_ms" })
  positionMs: number;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSeekToPositionInCurrentlyPlayingTrackHeaders;

  @SpeakeasyMetadata()
  security: EndpointSeekToPositionInCurrentlyPlayingTrackSecurity;
}


export class EndpointSeekToPositionInCurrentlyPlayingTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
