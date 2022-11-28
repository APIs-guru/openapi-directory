import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market: string;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetTheUsersCurrentlyPlayingTrackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetTheUsersCurrentlyPlayingTrackHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetTheUsersCurrentlyPlayingTrackSecurity;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentlyPlayingObject?: shared.CurrentlyPlayingObject;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
