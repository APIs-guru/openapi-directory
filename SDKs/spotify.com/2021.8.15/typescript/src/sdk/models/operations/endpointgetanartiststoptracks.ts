import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnArtistsTopTracksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistsTopTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market: string;
}


export class EndpointGetAnArtistsTopTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistsTopTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnArtistsTopTracksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnArtistsTopTracksPathParams;

  @Metadata()
  queryParams: EndpointGetAnArtistsTopTracksQueryParams;

  @Metadata()
  headers: EndpointGetAnArtistsTopTracksHeaders;

  @Metadata()
  security: EndpointGetAnArtistsTopTracksSecurity;
}


export class EndpointGetAnArtistsTopTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  tracksObject?: shared.TracksObject;
}
