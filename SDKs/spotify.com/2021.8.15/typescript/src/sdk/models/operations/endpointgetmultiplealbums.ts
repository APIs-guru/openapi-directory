import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetMultipleAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleAlbumsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleAlbumsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetMultipleAlbumsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetMultipleAlbumsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetMultipleAlbumsSecurity;
}


export class EndpointGetMultipleAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumsObject?: shared.AlbumsObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
