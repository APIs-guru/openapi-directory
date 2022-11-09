import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetMultipleArtistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointGetMultipleArtistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleArtistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleArtistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetMultipleArtistsQueryParams;

  @Metadata()
  headers: EndpointGetMultipleArtistsHeaders;

  @Metadata()
  security: EndpointGetMultipleArtistsSecurity;
}


export class EndpointGetMultipleArtistsResponse extends SpeakeasyBase {
  @Metadata()
  artistsObject?: shared.ArtistsObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
