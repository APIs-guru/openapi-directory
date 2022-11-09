import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnArtistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnArtistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnArtistPathParams;

  @Metadata()
  headers: EndpointGetAnArtistHeaders;

  @Metadata()
  security: EndpointGetAnArtistSecurity;
}


export class EndpointGetAnArtistResponse extends SpeakeasyBase {
  @Metadata()
  artistObject?: shared.ArtistObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
