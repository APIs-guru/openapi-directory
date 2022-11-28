import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAnArtistsTopTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistsTopTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market: string;
}


export class EndpointGetAnArtistsTopTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistsTopTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnArtistsTopTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAnArtistsTopTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetAnArtistsTopTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAnArtistsTopTracksHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAnArtistsTopTracksSecurity;
}


export class EndpointGetAnArtistsTopTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tracksObject?: shared.TracksObject;
}
