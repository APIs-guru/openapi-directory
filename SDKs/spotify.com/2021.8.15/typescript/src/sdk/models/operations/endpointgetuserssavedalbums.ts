import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetUsersSavedAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetUsersSavedAlbumsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetUsersSavedAlbumsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetUsersSavedAlbums200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetUsersSavedAlbums200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SavedAlbumObject })
  items?: shared.SavedAlbumObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class EndpointGetUsersSavedAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetUsersSavedAlbumsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetUsersSavedAlbumsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetUsersSavedAlbumsSecurity;
}


export class EndpointGetUsersSavedAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetUsersSavedAlbums200ApplicationJsonObject?: EndpointGetUsersSavedAlbums200ApplicationJson;
}
