import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market: string;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetTheUsersCurrentlyPlayingTrackQueryParams;

  @Metadata()
  headers: EndpointGetTheUsersCurrentlyPlayingTrackHeaders;

  @Metadata()
  security: EndpointGetTheUsersCurrentlyPlayingTrackSecurity;
}


export class EndpointGetTheUsersCurrentlyPlayingTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentlyPlayingObject?: shared.CurrentlyPlayingObject;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
