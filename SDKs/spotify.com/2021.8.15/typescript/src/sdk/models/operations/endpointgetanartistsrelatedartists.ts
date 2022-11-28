import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAnArtistsRelatedArtistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistsRelatedArtistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistsRelatedArtistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnArtistsRelatedArtistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAnArtistsRelatedArtistsPathParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAnArtistsRelatedArtistsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAnArtistsRelatedArtistsSecurity;
}


export class EndpointGetAnArtistsRelatedArtistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistsObject?: shared.ArtistsObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
