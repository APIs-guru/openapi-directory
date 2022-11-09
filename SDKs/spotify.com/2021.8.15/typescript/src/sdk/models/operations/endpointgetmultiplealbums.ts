import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetMultipleAlbumsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleAlbumsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleAlbumsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleAlbumsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetMultipleAlbumsQueryParams;

  @Metadata()
  headers: EndpointGetMultipleAlbumsHeaders;

  @Metadata()
  security: EndpointGetMultipleAlbumsSecurity;
}


export class EndpointGetMultipleAlbumsResponse extends SpeakeasyBase {
  @Metadata()
  albumsObject?: shared.AlbumsObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
