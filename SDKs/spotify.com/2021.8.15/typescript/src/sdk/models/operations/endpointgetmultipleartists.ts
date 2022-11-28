import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetMultipleArtistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointGetMultipleArtistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleArtistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleArtistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetMultipleArtistsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetMultipleArtistsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetMultipleArtistsSecurity;
}


export class EndpointGetMultipleArtistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistsObject?: shared.ArtistsObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
