import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckUsersSavedAlbumsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedAlbumsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedAlbumsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedAlbumsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointCheckUsersSavedAlbumsQueryParams;

  @Metadata()
  headers: EndpointCheckUsersSavedAlbumsHeaders;

  @Metadata()
  security: EndpointCheckUsersSavedAlbumsSecurity;
}


export class EndpointCheckUsersSavedAlbumsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckUsersSavedAlbums200ApplicationJsonBooleans?: boolean[];
}
