import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnArtistsRelatedArtistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistsRelatedArtistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistsRelatedArtistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnArtistsRelatedArtistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnArtistsRelatedArtistsPathParams;

  @Metadata()
  headers: EndpointGetAnArtistsRelatedArtistsHeaders;

  @Metadata()
  security: EndpointGetAnArtistsRelatedArtistsSecurity;
}


export class EndpointGetAnArtistsRelatedArtistsResponse extends SpeakeasyBase {
  @Metadata()
  artistsObject?: shared.ArtistsObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
