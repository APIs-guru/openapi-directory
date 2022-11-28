import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckUsersSavedAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedAlbumsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedAlbumsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointCheckUsersSavedAlbumsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckUsersSavedAlbumsHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckUsersSavedAlbumsSecurity;
}


export class EndpointCheckUsersSavedAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckUsersSavedAlbums200ApplicationJsonBooleans?: boolean[];
}
